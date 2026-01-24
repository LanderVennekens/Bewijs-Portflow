import axios from 'axios'

export type Coordinates = {
  latitude: number
  longitude: number
}

type GeocodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number
        lng: number
      }
    }
  }[]
  status: string
}

export const geocodeAddress = async (address: string): Promise<Coordinates | null> => {
  try {
    const apiKey ="AIzaSyBGFCogELk42oFma7jjKipaJkFxGUa6z04"

    const response = await axios.get<GeocodingResponse>(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address,
          key: apiKey,
        },
      }
    )

    const result = response.data?.results?.[0]

    if (!result) {
      console.warn('No geocoding results for:', address)
      return null
    }

    const { lat, lng } = result.geometry.location
    return { latitude: lat, longitude: lng }
  } catch (error) {
    console.error('Geocoding error:', error)
    return null
  }
}
