import { useStores } from "../../../../models"

export const useCustomOptions = () => {
  const { game: { gameProgress } } = useStores()

  const OPTIONS = [
    {
      tx: "mapScreen.options.step_1_completed_text",
      complete: gameProgress.step1_DiceResult.isCompleted
    },
    {
      tx: "mapScreen.options.step_2_completed_text",
      complete: gameProgress.step2_SelectedPlaceToBuild.isCompleted
    },
    {
      tx: "mapScreen.options.step_3_completed_text",
      complete: gameProgress.step3_IsBuildStarted.isCompleted
    },
  ]

  return {
    data: {
      OPTIONS
    }
  }
}
