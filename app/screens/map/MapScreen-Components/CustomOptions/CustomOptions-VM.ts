import { useStores } from "../../../../models"

export const useCustomOptions = () => {
  const { game } = useStores()

  const OPTIONS = [
    {
      tx: "mapScreen.options.step_1_completed_text",
      complete: game.canBeCompletedStep1
    },
    {
      tx: "mapScreen.options.step_2_completed_text",
      complete: game.canBeCompletedStep2
    },
    {
      tx: "mapScreen.options.step_3_completed_text",
      complete: game.canBeCompletedStep3
    },
  ]

  return {
    data: {
      OPTIONS
    }
  }
}
