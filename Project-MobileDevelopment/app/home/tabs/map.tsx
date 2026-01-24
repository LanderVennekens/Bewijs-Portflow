import { FunctionComponent, useEffect, useState } from 'react'
import MapView, { Marker, Region } from 'react-native-maps'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { getCurrentUser } from '@/api/auth'
import { getHousesForUser } from '@/api/firestoreUtils'
import { geocodeAddress } from '@/utils/geocodeAddress'
import { House } from '@/models/house'

type HouseWithCoords = House & {
  coordinates: {
    latitude: number
    longitude: number
  }
}

const Map: FunctionComponent = () => {
  const [housesWithCoords, setHousesWithCoords] = useState<HouseWithCoords[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHousesWithCoords = async () => {
      try {
        const user = getCurrentUser()
        if (!user) {
          setError('User not logged in')
          setLoading(false)
          return
        }

        // Haal houses op uit Firestore
        const houses = await getHousesForUser(user.uid)

        const results: HouseWithCoords[] = []

        for (const house of houses) {
          const address = `${house.street} ${house.number}, ${house.zip} ${house.city}, Belgium`
          const coords = await geocodeAddress(address)

          if (coords) {
            results.push({ ...house, coordinates: coords })
          } else {
            console.warn(`No coordinates found for ${address}`)
          }
        }

        setHousesWithCoords(results)
      } catch (e) {
        setError('Failed to load map data.')
        console.error(e)
      } finally {
        setLoading(false)
      }
    }

    void fetchHousesWithCoords()
  }, [])

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Loading map...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    )
  }

  if (housesWithCoords.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No houses found to display on the map.</Text>
      </View>
    )
  }

  const initialRegion: Region = {
    latitude: housesWithCoords[0].coordinates.latitude,
    longitude: housesWithCoords[0].coordinates.longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  }

  return (
    <MapView style={styles.map} initialRegion={initialRegion}>
      {housesWithCoords.map((house) => (
        <Marker
          key={house.id}
          coordinate={house.coordinates}
          title={house.name}
          description={`${house.street} ${house.number}, ${house.city}`}
        />
      ))}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Map
