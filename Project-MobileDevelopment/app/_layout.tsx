import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { FunctionComponent } from 'react'
import '@/global.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: !__DEV__,
      staleTime: Infinity,
    },
  },
})

const RootLayout: FunctionComponent = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider mode="light">
          <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
          </Stack>
        </GluestackUIProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout
