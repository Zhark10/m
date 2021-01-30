import { useCallback, useEffect, useRef } from "react"
import { useStores } from "../../../../../../models"

export const useStep2 = () => {
  const { city, game } = useStores()
  const carouselRef = useRef(null)

  const {
    message: { showMessage },
  } = useStores()

  useEffect(
    function pushMessage() {
      if (!game.canBeCompletedStep2) return
      const message = {
        title: "Место выбрано!",
        description: `Отправляйся на ${city.currentPlace.organizationName}. У тебя 5 часов, чтобы приобрести место за ${city.currentPlace.cost}$`,
        buttonText: "Хорошо",
      }
      showMessage(message)
    },
    [game.canBeCompletedStep2],
  )

  const onSnapToItem = useCallback(
    (index: number) => {
      if (!city.availablePlaces.length) return
      const currentShowedPlace = city.availablePlaces[index]
      city.selectPlace(currentShowedPlace)
    },
    [city.availablePlaces],
  )

  const rollTheDiceAgain = () => {
    game.resetDiceResult()
  }

  return {
    data: {
      carouselRef,
      availablePlaces: city.availablePlaces,
    },
    methods: {
      onSnapToItem,
      rollTheDiceAgain,
    },
  }
}
