import { types } from "mobx-state-tree"
import { GameProgressModel } from "./Models"

export const Store = types
  .model({
    currentActivePlayer: types.maybeNull(types.string),
    gameProgress: GameProgressModel,
    isLoaded: types.boolean,
  })
  .views(self => ({
    // FOR DYNAMIC MESSAGE SHOW
    get canBeCompletedStep1() {
      const { first, second } = self.gameProgress.step1_DiceResult
      return Boolean(first && second)
    },
    get canBeCompletedStep2() {
      return Boolean(self.gameProgress.step2_SelectedPlaceToBuild.placeId)
    },
    get canBeCompletedStep3() {
      return Boolean(self.gameProgress.step3_IsBuildStarted.isPlaceBuildStart)
    },
    get canBeCompletedStep4() {
      return Boolean(self.gameProgress.step4_IsBuildFinished.IsBuildFinished)
    },
  }))
  .actions(self => ({
    saveDiceResult(cubeNumber: "first" | "second", value: number) {
      self.gameProgress.step1_DiceResult[cubeNumber] = value
    },
    resetDiceResult() {
      self.gameProgress.step1_DiceResult = {
        first: 0,
        second: 0,
        isCompleted: false
      }
    }
  }))

export const Game = {
  Store,
}
