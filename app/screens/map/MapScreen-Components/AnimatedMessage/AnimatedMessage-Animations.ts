import { useEffect } from "react"
import { useSharedValue, Easing, useAnimatedStyle, withTiming } from "react-native-reanimated"
import { useStores } from "../../../../models"
import { screenHeight } from "../../../../utils/screen"

const useMessages = () => {
  const { message, game } = useStores()
  const top = useSharedValue(-screenHeight)

  const config = {
    duration: 1000,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const styleMessageShow = useAnimatedStyle(() => {
    return {
      top: withTiming(top.value, config),
    }
  })

  useEffect(function autohideMessage() {
    if (message.isShow) {
      top.value = 0
    } else {
      top.value = -screenHeight
    }
  }, [message.isShow])

  /**

  useEffect(function showMessage() {
    const message: any = {}

    if (game.canBeCompletedStep4) {
      message.title = 'Вот и сделан последний шаг!'
      message.description = `Ты построил филлиал на ${currentPlace}! А это значит, что с этого момента место принадлежит тебе и будет приносить ежедневный доход`
      top.value = 0
      return null
    }

    if (game.canBeCompletedStep3) {
      message.title = 'Поздравляю! Теперь ты владелец!'
      message.description = `Ты только что приобрел филлиал "${currentPlace}"`
      top.value = 0
      return null
    }

    if (game.canBeCompletedStep2) {
      message.title = 'Место выбрано!'
      message.description = `Отправляйся на ${currentPlace}. У тебя 5 часов, чтобы приобрести место`
      top.value = 0
      return null
    }

  }, [
    game.canBeCompletedStep1,
    game.canBeCompletedStep2,
    game.canBeCompletedStep3,
    game.canBeCompletedStep4
  ])

  */

  return {
    styleMessageShow,
  }
}

export const AnimatedMessageAnimations = {
  useMessages,
}
