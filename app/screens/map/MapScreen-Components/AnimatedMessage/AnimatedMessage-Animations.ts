import { useEffect } from "react"
import { useSharedValue, Easing, useAnimatedStyle, withTiming } from "react-native-reanimated"
import { useStores } from "../../../../models"
import { screenHeight } from "../../../../utils/screen"

const useMessages = () => {
  const { game, city: { currentPlace } } = useStores()
  const bottom = useSharedValue(screenHeight)

  const config = {
    duration: 1500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const styleMessageShow = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(bottom.value, config),
        },
      ],
    }
  })

  const hideMessage = () => {
    bottom.value = screenHeight
  }

  useEffect(function showMessage() {
    const message: any = {}

    if (game.canBeCompletedStep4) {
      message.title = 'Вот и сделан последний шаг!'
      message.description = `Ты построил филлиал на ${currentPlace}! А это значит, что с этого момента место принадлежит тебе и будет приносить ежедневный доход`
      bottom.value = 0
      return null
    }

    if (game.canBeCompletedStep3) {
      message.title = 'Поздравляю! Теперь ты владелец!'
      message.description = `Ты только что приобрел филлиал "${currentPlace}"`
      bottom.value = 0
      return null
    }

    if (game.canBeCompletedStep2) {
      message.title = 'Место выбрано!'
      message.description = `Отправляйся на ${currentPlace}. У тебя 5 часов, чтобы приобрести место`
      bottom.value = 0
      return null
    }

    if (game.canBeCompletedStep1) {
      message.title = `И у тебя выпадает ${game.rollTheDiceResult}`
      message.description = `А это означает, что в радиусе ${game.calculatedRadius} км. ты можешь выбрать следующее место для постройки!`
      bottom.value = 0
      return null
    }
  }, [
    game.canBeCompletedStep1,
    game.canBeCompletedStep2,
    game.canBeCompletedStep3,
    game.canBeCompletedStep4
  ])

  return {
    styleMessageShow,
    hideMessage,
  }
}

export const AnimatedMessageAnimations = {
  useMessages,
}
