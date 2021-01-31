import { useEffect } from "react"
import { useStores } from "../../../../../../models"
import { TEXT_SEPARATOR } from "../../../AnimatedMessage/AnimatedMessage-VM"

export const useStep1 = () => {
  const { game } = useStores()
  const {
    message: { showMessage, hideMessage },
  } = useStores()

  useEffect(function resetCache() {
    hideMessage()
  }, [])

  useEffect(
    function pushMessage() {
      if (!game.canBeCompletedStep1) return
      const message = {
        title: `И у тебя выпадает ${TEXT_SEPARATOR.TITLE.TO_STYLED_TEXT}${game.rollTheDiceResult}${TEXT_SEPARATOR.TITLE.TO_STYLED_TEXT} очков`,
        description: `А это означает, что в радиусе ${TEXT_SEPARATOR.DESCRIPTION.TO_STYLED_TEXT}${game.calculatedRadius}${TEXT_SEPARATOR.DESCRIPTION.TO_STYLED_TEXT} км. ты можешь выбрать следующее место для постройки!`,
        buttonText: "Хорошо",
      }
      showMessage(message)
    },
    [game.canBeCompletedStep1],
  )
}
