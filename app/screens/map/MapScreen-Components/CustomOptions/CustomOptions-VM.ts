import { useStores } from "../../../../models"

export const useCustomOptions = () => {
  const { game: { gameProgress } } = useStores()
  const step1Completed = (Object.values(gameProgress.step1_DiceResult).every(cubeResult => Boolean(cubeResult)))
  const step2Completed = gameProgress.step2_SelectedPlaceToBuild
  const step3Completed = gameProgress.step3_IsBuildStarted

  const OPTIONS = [
    {
      tx: "mapScreen.options.step_1_completed_text",
      complete: Boolean(step1Completed)
    },
    {
      tx: "mapScreen.options.step_2_completed_text",
      complete: Boolean(step2Completed)
    },
    {
      tx: "mapScreen.options.step_3_completed_text",
      complete: Boolean(step3Completed)
    },
  ]

  return {
    data: {
      OPTIONS
    }
  }
}
