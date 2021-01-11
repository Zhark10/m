import { useEffect } from "react"
import { useSharedValue, Easing, useAnimatedStyle, withTiming } from "react-native-reanimated"
import { useStores } from "../../../../models"
import { screenHeight, screenWidth } from "../../../../utils/screen"
import { TGamePanelProps } from "./GamePanel"

const panelHeight = 2 / 3 * screenHeight

const usePanelAnimation = ({ isMapTouched }: TGamePanelProps) => {
  const top = useSharedValue(screenHeight - 128)
  const initialMessageStartOffset = useSharedValue(0)

  const panelStyle = useAnimatedStyle(() => {
    const config = {
      duration: 1500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    }

    return {
      top: withTiming(top.value, config),
    }
  })

  const initialMessageStyle = useAnimatedStyle(() => {
    const config = {
      duration: 1200,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    }
    return {
      top: withTiming(initialMessageStartOffset.value, config),
    }
  })

  useEffect(() => {
    const animationByTimeout = setTimeout(() => {
      top.value = panelHeight
      initialMessageStartOffset.value = screenHeight
    }, 2000)

    return () => clearTimeout(animationByTimeout)
  }, [])

  return {
    panelStyle,
    initialMessageStyle,
  }
}

const useStepChangeAnimation = () => {
  const right = useSharedValue(0)
  const { game: { gameProgress, resetDiceResult } } = useStores()

  const stepsStyle = useAnimatedStyle(() => {
    const config = {
      duration: 1500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    }

    return {
      right: withTiming(right.value, config),
    }
  })

  useEffect(() => {
    let newRightOffset = 0
    if (Object.values(gameProgress.step1_DiceResult).every(cubeResult => Boolean(cubeResult))) {
      newRightOffset = screenWidth
    }

    const animationByTimeout = setTimeout(() => {
      right.value = newRightOffset
    }, 2000)

    return () => clearTimeout(animationByTimeout)
  }, [gameProgress.step1_DiceResult.first, gameProgress.step1_DiceResult.second])

  return {
    stepsStyle,
  }
}

export const PanelAnimations = {
  usePanelAnimation,
  useStepChangeAnimation,
}
