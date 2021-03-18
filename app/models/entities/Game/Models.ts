import { types } from "mobx-state-tree"

const DiceResult = types.model({
  first: types.maybeNull(types.number),
  second: types.maybeNull(types.number),
  isCompleted: types.boolean,
})

const SelectedPlaceToBuild = types.model({
  placeId: types.maybeNull(types.string),
  isCompleted: types.boolean,
})

const IsBuildStarted = types.model({
  isPlaceBuildStart: types.boolean,
  isCompleted: types.boolean,
})

const IsBuildFinished = types.model({
  IsBuildFinished: types.boolean,
  isCompleted: types.boolean,
})

export const GameProgressModel = types
  .model("GameProgress", {
    step1_DiceResult: DiceResult,
    step2_SelectedPlaceToBuild: SelectedPlaceToBuild,
    step3_IsBuildStarted: IsBuildStarted,
    step4_IsBuildFinished: IsBuildFinished,
  })
  .actions((gameProgress) => ({
    completeStep(stepNumber) {
      const stepsForComplete = {
        1: gameProgress.step1_DiceResult,
        2: gameProgress.step2_SelectedPlaceToBuild,
        3: gameProgress.step3_IsBuildStarted,
        4: gameProgress.step4_IsBuildFinished,
      }
      const step = stepsForComplete[stepNumber]

      step.isCompleted = true
    },
  }))
  .views((gameProgress) => ({
    get currentStepNumber() {
      if (gameProgress.step4_IsBuildFinished.isCompleted) {
        return 4
      }
      if (gameProgress.step3_IsBuildStarted.isCompleted) {
        return 3
      }
      if (gameProgress.step2_SelectedPlaceToBuild.isCompleted) {
        return 2
      }
      if (gameProgress.step1_DiceResult.isCompleted) {
        return 1
      }
      return 0
    },
  }))
