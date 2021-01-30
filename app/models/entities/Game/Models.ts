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
  .actions((self) => ({
    completeStep(stepNumber) {
      const stepsForComplete = {
        1: self.step1_DiceResult,
        2: self.step2_SelectedPlaceToBuild,
        3: self.step3_IsBuildStarted,
        4: self.step4_IsBuildFinished,
      }
      const step = stepsForComplete[stepNumber]

      step.isCompleted = true
    },
  }))
  .views((self) => ({
    get currentStepNumber() {
      if (self.step4_IsBuildFinished.isCompleted) {
        return 4
      }
      if (self.step3_IsBuildStarted.isCompleted) {
        return 3
      }
      if (self.step2_SelectedPlaceToBuild.isCompleted) {
        return 2
      }
      if (self.step1_DiceResult.isCompleted) {
        return 1
      }
      return 0
    },
  }))
