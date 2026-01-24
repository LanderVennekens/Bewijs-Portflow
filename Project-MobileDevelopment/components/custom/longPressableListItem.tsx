import { FunctionComponent, useState } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { View } from 'react-native'

import { Button, ButtonIcon } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react-native'

interface LongPressableListItemProps {
  children: React.ReactNode
  onDelete: () => void
}

const LongPressableListItem: FunctionComponent<LongPressableListItemProps> = ({
                                                                                children,
                                                                                onDelete,
                                                                              }) => {
  const [active, setActive] = useState(false)
  const opacity = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  const longPressGesture = Gesture.LongPress().onStart(() => {
    runOnJS(setActive)(true)
    opacity.value = withTiming(1)
  })

  const tapGesture = Gesture.Tap().onStart(() => {
    if (active) {
      runOnJS(setActive)(false)
      opacity.value = withTiming(0)
    }
  })

  const composedGesture = Gesture.Race(longPressGesture, tapGesture)

  return (
    <GestureDetector gesture={composedGesture}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 1,
        }}
      >
        <View style={{ flex: 1 }}>{children}</View>

        {active && (
          <Animated.View style={[animatedStyle]}>
            <Button onPress={onDelete} variant="outline">
              <ButtonIcon as={TrashIcon} />
            </Button>
          </Animated.View>
        )}
      </View>
    </GestureDetector>
  )
}

export default LongPressableListItem
