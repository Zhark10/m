/* eslint-disable camelcase */
import { useEffect } from "react"
import { useSharedValue, Easing, useAnimatedStyle, withTiming } from "react-native-reanimated"
import { useStores } from "../../../../models"
import { screenHeight, screenWidth } from "../../../../utils/screen"
import { TGamePanelProps } from "./GamePanel"

const panelHeight = (2 / 3) * screenHeight

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

  useEffect(() => {
    if (props.isMapTouched) {
      console.log('TOUCHED')
      top.value = panelHeight - 20
      initialMessageStartOffset.value = screenHeight - 20
    } else {
      console.log('UNTOUCHED')
      top.value = panelHeight + 20
      initialMessageStartOffset.value = screenHeight
    }
  }, [props.isMapTouched])

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
  const {
    game: {
      gameProgress: {
        step1_DiceResult,
        step2_SelectedPlaceToBuild,
        step3_IsBuildStarted,
        step4_IsBuildFinished,
      },
    },
  } = useStores()
  const progressWatchedItemsToPanelAnimate = [
    step1_DiceResult.isCompleted,
    step2_SelectedPlaceToBuild.isCompleted,
    step3_IsBuildStarted.isCompleted,
    step4_IsBuildFinished.isCompleted,
  ]

  const stepsStyle = useAnimatedStyle(() => {
    const config = {
      duration: 1500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    }

    return {
      right: withTiming(right.value, config),
    }
  })

  useEffect(function definePanelHorrizontalOffset() {
    if (step4_IsBuildFinished.isCompleted) {
      right.value = 4 * screenWidth
      return
    }

    if (step3_IsBuildStarted.isCompleted) {
      right.value = 3 * screenWidth
      return
    }

    if (step2_SelectedPlaceToBuild.isCompleted) {
      right.value = 2 * screenWidth
      return
    }

    if (step1_DiceResult.isCompleted) {
      right.value = screenWidth
      return
    }

    right.value = 0
  }, progressWatchedItemsToPanelAnimate)

  return {
    stepsStyle,
  }
}

export const PanelAnimations = {
  usePanelAnimation,
  useStepChangeAnimation,
}
