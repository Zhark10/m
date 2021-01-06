import { useEffect } from "react"
import { useSharedValue, Easing, useAnimatedStyle, withTiming } from "react-native-reanimated"

const useMapViewContainerAnimation = () => {
  const scale = useSharedValue(1.5)

  const config = {
    duration: 1500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(scale.value, config),
        },
      ],
    }
  })

  useEffect(() => {
    const animationByTimeout = setTimeout(() => {
      scale.value = 1
    }, 2000)

    return () => clearTimeout(animationByTimeout)
  }, [])

  return {
    style
  }
}

export const MapScreenAnimations = {
  useMapViewContainerAnimation,
}
