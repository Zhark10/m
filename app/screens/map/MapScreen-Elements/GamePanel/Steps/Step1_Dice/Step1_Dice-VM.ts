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
      const defaultTitlePart =
        game.rollTheDiceResult > 10
          ? "Отлично!"
          : game.rollTheDiceResult > 8
          ? "Неплохо!"
          : "Упс... всего"
      const message = {
        title: `${defaultTitlePart} ${TEXT_SEPARATOR.TITLE.TO_STYLED_TEXT}${game.rollTheDiceResult} очков${TEXT_SEPARATOR.TITLE.TO_STYLED_TEXT}`,
        description: `А это означает, что в радиусе ${TEXT_SEPARATOR.DESCRIPTION.TO_STYLED_TEXT}${game.calculatedRadius} км.${TEXT_SEPARATOR.DESCRIPTION.TO_STYLED_TEXT} ты можешь выбрать следующее место для постройки!`,
        buttonText: "Хорошо",
      }
      showMessage(message)
    },
    [game.canBeCompletedStep1],
  )
}
