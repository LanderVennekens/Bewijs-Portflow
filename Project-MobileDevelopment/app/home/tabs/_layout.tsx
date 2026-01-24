import {FunctionComponent} from 'react'
import {Map, List, Plus, User} from 'lucide-react-native'
import useUser from '@/hooks/useUser'
import {Tabs, Link, Redirect} from 'expo-router'
import {Pressable} from 'react-native'

const HomeTabsLayout: FunctionComponent = () => {
  const user = useUser()

  if (!user) {
    return <Redirect href="/login" />
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="list"
        options={{
          title: 'List',
          tabBarIcon: ({color, size}) => <List color={color} size={size} />,
          headerShown: true,
          headerRight: () => (
            <Link href="/home/addHouse" asChild>
              <Pressable style={{paddingRight: 16}}>
                <Plus size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({color, size}) => <Map color={color} size={size} />,
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({color, size}) => <User color={color} size={size} />,
          headerShown: true,
        }}
      />
    </Tabs>
  )
}

export default HomeTabsLayout
