import { FunctionComponent, useEffect, useState } from 'react'
import { FlashList } from '@shopify/flash-list'
import HouseCard from '@/components/houseCard'
import { House } from '@/models/house'
import { getCurrentUser } from '@/api/auth'
import { getHousesForUser, deleteHouse } from '@/api/firestoreUtils'
import LongPressableListItem from '@/components/custom/longPressableListItem'
import { Text, View } from 'react-native'

const List: FunctionComponent = () => {
  const [houses, setHouses] = useState<House[]>([])

  useEffect(() => {
    const fetchHouses = async () => {
      const user = getCurrentUser()
      if (!user) return

      const fetchedHouses = await getHousesForUser(user.uid)
      setHouses(fetchedHouses)
    }

    void fetchHouses()
  }, [])

  const handleDelete = async (houseId: string) => {
    console.log('delete')
    const user = getCurrentUser()
    if (!user) return

    await deleteHouse(user.uid, houseId)
    setHouses(prev => prev.filter(h => h.id !== houseId))
  }

  return houses.length === 0 ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>There are no houses to show.</Text>
    </View>
  ) : (
    <FlashList
      data={houses}
      renderItem={({ item }) => (
        <LongPressableListItem onDelete={() => handleDelete(item.id)}>
          <HouseCard house={item} />
        </LongPressableListItem>
      )}
      keyExtractor={item => item.id}
      estimatedItemSize={100}
    />
  )
}

export default List
