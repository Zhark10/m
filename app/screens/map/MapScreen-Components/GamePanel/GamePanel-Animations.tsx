import { useEffect } from "react"
import { useSharedValue, Easing, useAnimatedStyle, withTiming } from "react-native-reanimated"
import { useStores } from "../../../../models"
import { screenHeight, screenWidth } from "../../../../utils/screen"
import { TGamePanelProps } from "./GamePanel"

const panelHeight = 2 / 3 * screenHeight

const usePanelAnimation = (props: TGamePanelProps) => {
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

  // useEffect(() => {
  //   if (props.isMapTouched) {
  //     top.value = panelHeight - 20
  //     initialMessageStartOffset.value = screenHeight - 20
  //   } else {
  //     top.value = panelHeight
  //     initialMessageStartOffset.value = screenHeight
  //   }
  // }, [props.isMapTouched])

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
  const { game: { gameProgress } } = useStores()

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
    if (gameProgress.step1_DiceResult.isCompleted) {
      newRightOffset = screenWidth
    }

    right.value = newRightOffset
  }, [gameProgress.step1_DiceResult.isCompleted])

  return {
    stepsStyle,
  }
}

export const PanelAnimations = {
  usePanelAnimation,
  useStepChangeAnimation,
}
