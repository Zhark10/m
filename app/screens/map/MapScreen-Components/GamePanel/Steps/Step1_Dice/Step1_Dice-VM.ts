import { useEffect } from "react"
import { useStores } from "../../../../../../models"

export const useStep1 = () => {
  const { game } = useStores()
  const { message: { showMessage, hideMessage } } = useStores()

  useEffect(function resetCache() {
    game.resetDiceResult()
    hideMessage()
  }, [])

  useEffect(function pushMessage() {
    if (!game.canBeCompletedStep1) return
    const message = {
      title: `И у тебя выпадает ${game.rollTheDiceResult}`,
      description: `А это означает, что в радиусе ${game.calculatedRadius} км. ты можешь выбрать следующее место для постройки!`,
      buttonText: 'Хорошо'
    }
    showMessage(message)
  }, [game.canBeCompletedStep1])
}
