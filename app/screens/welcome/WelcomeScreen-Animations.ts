import { useEffect } from "react"
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated/src/Animated"
import { screenWidth } from "../../utils/screen"

const useRandomBoxWidth = () => {
  const randomWidth = useSharedValue(10)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    }
  })

  useEffect(() => {
    const animationByInterval = setInterval(() => {
      randomWidth.value = Math.random() * 350
    }, 2000)

    return () => clearInterval(animationByInterval)
  }, [])

  return {
    style,
  }
}

const useTitleAnimation = () => {
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
    style,
  }
}

const useDeparturePictureFromTheSide = () => {
  const topLogo = useSharedValue(screenWidth / 3)
  const leftLogo = useSharedValue(screenWidth)

  const offset = useSharedValue(screenWidth)
  const questDescriptionOpacity = useSharedValue(0)
  const footerOpacity = useSharedValue(0)

  const defaultConfig = {
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const logoStyle = useAnimatedStyle(() => {
    const config = {
      duration: 500,
      ...defaultConfig,
    }
    return {
      left: withTiming(leftLogo.value, config),
      top: withTiming(topLogo.value, config),
    }
  })

  const facebookStyle = useAnimatedStyle(() => {
    const config = {
      duration: 800,
      ...defaultConfig,
    }
    return {
      top: withTiming(offset.value, config),
    }
  })

  const googleStyle = useAnimatedStyle(() => {
    const config = {
      duration: 1100,
      ...defaultConfig,
    }
    return {
      top: withTiming(offset.value, config),
    }
  })

  const vkStyle = useAnimatedStyle(() => {
    const config = {
      duration: 1400,
      ...defaultConfig,
    }
    return {
      top: withTiming(offset.value, config),
    }
  })

  const questStyle = useAnimatedStyle(() => {
    const config = {
      duration: 1700,
      ...defaultConfig,
    }
    return {
      top: withTiming(offset.value, config),
    }
  })

  const showFooterStyle = useAnimatedStyle(() => {
    const config = {
      duration: 2000,
      ...defaultConfig,
    }
    return {
      opacity: withTiming(footerOpacity.value, config),
    }
  })

  const showQuestDescriptionStyle = useAnimatedStyle(() => {
    const config = {
      duration: 2000,
      ...defaultConfig,
    }
    return {
      opacity: withTiming(questDescriptionOpacity.value, config),
    }
  })

  useEffect(() => {
    const startAnimationByTime = setTimeout(() => {
      offset.value = 0
      topLogo.value = 0
      leftLogo.value = 0
      questDescriptionOpacity.value = 1
      footerOpacity.value = 1
    }, 3000)

    return () => clearTimeout(startAnimationByTime)
  }, [])

  return {
    logoStyle,
    facebookStyle,
    googleStyle,
    vkStyle,
    questStyle,
    showFooterStyle,
    showQuestDescriptionStyle,
  }
}

export const welcomeAnimations = {
  useTitleAnimation,
  useRandomBoxWidth,
  useDeparturePictureFromTheSide,
}
