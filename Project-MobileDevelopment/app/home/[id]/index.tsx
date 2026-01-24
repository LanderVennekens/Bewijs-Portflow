import { FunctionComponent, useEffect, useState } from 'react'
import { FlashList } from '@shopify/flash-list'
import {View, Text, SafeAreaView} from 'react-native'
import {deleteExpense, getExpensesForHouse} from '@/api/firestoreUtils'
import { useLocalSearchParams} from 'expo-router'
import { Expense } from '@/models/expense'
import ExpenseCard from '@/components/expenseCard'
import LongPressableListItem from '@/components/custom/longPressableListItem'
import {getCurrentUser} from '@/api/auth'

const HouseDetail: FunctionComponent = () => {
  const { id } = useLocalSearchParams()
  const [houseExpenses, setHouseExpenses] = useState<Expense[]>([])

  useEffect(() => {
    const fetchExpenses = async () => {
      if (!id) return

      const houseId = Array.isArray(id) ? id[0] : id
      const fetchedExpenses = await getExpensesForHouse(houseId)
      setHouseExpenses(fetchedExpenses)
    }

    void fetchExpenses()
  }, [id])

  const handleDelete = async (expenseId: string) => {
    console.log('delete')
    const user = getCurrentUser()
    if (!user) return

    await deleteExpense(user.uid, expenseId)
    setHouseExpenses(prev => prev.filter(h => h.id !== expenseId))
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
            Expenses
          </Text>

          {houseExpenses.length === 0 ? (
            <Text>No expenses found for this house.</Text>
          ) : (
            <FlashList<Expense>
              data={houseExpenses}
              renderItem={({ item }) =>
                (
                  <LongPressableListItem onDelete={() => handleDelete(item.id)}>
                    <ExpenseCard expense={item} />
                  </LongPressableListItem>
                )}
              keyExtractor={(item) => item.id}
              estimatedItemSize={100}
            />
          )}
        </View>
      </SafeAreaView>

    </>
  )
}

export default HouseDetail
