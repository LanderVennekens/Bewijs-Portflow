import {Redirect} from 'expo-router'
import {FunctionComponent} from 'react'

import {AuthProvider, useSignIn} from '@/api/auth'
import useUser from '@/hooks/useUser'
import {Button, ButtonText} from '@/components/ui/button'
import {Box} from '@/components/ui/box'

const Index: FunctionComponent = () => {
  const {mutate: signInWithSocialAuth} = useSignIn()
  const user = useUser()

  if (user) {
    return <Redirect href="/home/tabs/list" />
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center" px="$4">
      <Button
        variant="outline"
        onPress={() => signInWithSocialAuth({ provider: AuthProvider.GOOGLE })}
      >
        <ButtonText>Sign in with Google</ButtonText>
      </Button>
    </Box>
  )

}

export default Index
