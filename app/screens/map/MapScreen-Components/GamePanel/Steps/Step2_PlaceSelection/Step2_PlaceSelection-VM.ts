import { useEffect } from "react"
import { useStores } from "../../../../../../models"

export const useStep2 = () => {
  const { game, city } = useStores()
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
    [game.canBeCompletedStep1],
  )
}
