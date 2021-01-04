import { useEffect } from "react"
import { useSharedValue, Easing, useAnimatedStyle, withTiming } from "react-native-reanimated"
import { screenWidth } from "../../../../utils/screen"

export const usePanelAnimation = () => {
  const top = useSharedValue(screenWidth / 2)
  const scale = useSharedValue(1.3)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const style = useAnimatedStyle(() => {
    return {
      top: withTiming(top.value, config),
      transform: [
        {
          scale: withTiming(scale.value, config),
        },
      ],
    }
  })

  useEffect(() => {
    const animationByTimeout = setTimeout(() => {
      top.value = 0
      scale.value = 1
    }, 2000)

    return () => clearTimeout(animationByTimeout)
  }, [])

  return {
    style
  }
}
