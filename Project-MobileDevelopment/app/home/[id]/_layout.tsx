import { FunctionComponent } from 'react'
import { Stack, Link } from 'expo-router'
import { Plus } from 'lucide-react-native'
import { Pressable } from 'react-native'

const StackLayout: FunctionComponent = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={({ route }) => {
          const houseId = route.params?.id
          return {
            title: 'House Details',
            headerRight: () => (
              <Link href={`/home/${houseId}/addExpense`} asChild>
                <Pressable style={{ paddingRight: 16 }}>
                  <Plus size={24} color="black" />
                </Pressable>
              </Link>
            ),
          }
        }}
      />
    </Stack>
  )
}

export default StackLayout
