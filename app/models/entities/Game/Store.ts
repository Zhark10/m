import { types } from "mobx-state-tree"
import { GameProgressModel } from "./Models"

export const Store = types.model({
  currentActivePlayer: types.maybeNull(types.string),
  gameProgress: GameProgressModel,
  isLoaded: types.boolean,
})
  .actions(self => ({
    saveDiceResult(cubeNumber: "first" | "second", value: number) {
      self.gameProgress.step1_DiceResult[cubeNumber] = value
    },
    resetDiceResult() {
      self.gameProgress.step1_DiceResult = {
        first: 0,
        second: 0
      }
    }
  }))

export const Game = {
  Store,
}
