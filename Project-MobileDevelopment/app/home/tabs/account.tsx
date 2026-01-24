import { FunctionComponent } from 'react'
import { View, Image, StyleSheet, Alert } from 'react-native'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import useUser from '@/hooks/useUser'
import { signOut } from '@/api/auth'
import {router} from 'expo-router'
import { useQueryClient } from '@tanstack/react-query'

const Account: FunctionComponent = () => {
  const user = useUser()
  const queryClient = useQueryClient()

  const handleLogout = async () => {
    try {
      await signOut()
      queryClient.invalidateQueries({ queryKey: ['currentUser'] })
      router.replace('/login')
    } catch (_error) {
      Alert.alert('Error', 'Could not log out. Please try again.')
    }
  }

  if (!user) {
    return (
      <View style={styles.centered}>
        <Text>Loading user info...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Heading size="lg" style={{ marginBottom: 20 }}>
        Account
      </Heading>
s
      {user.photoURL ? (
        <Image source={{ uri: user.photoURL }} style={styles.avatar} />
      ) : (
        <View style={[styles.avatar, styles.avatarPlaceholder]}>
          <Text>No Photo</Text>
        </View>
      )}

      <Text style={styles.name}>{user.displayName ?? 'No Name'}</Text>

      <Button variant="solid" onPress={handleLogout} style={styles.logoutButton}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  avatarPlaceholder: {
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 40,
  },
  logoutButton: {
    width: '100%',
  },
})

export default Account
