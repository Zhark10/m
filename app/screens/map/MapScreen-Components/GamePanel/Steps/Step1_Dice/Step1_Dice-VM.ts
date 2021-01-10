import { useEffect } from "react"
import { useStores } from "../../../../../../models"

export const useStep1 = () => {
  const { game } = useStores()

  useEffect(function resetCache() {
    game.resetDiceResult()
  }, [])
}
