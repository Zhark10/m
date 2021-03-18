import { types } from "mobx-state-tree"
import { GameProgressModel } from "./Models"

const coefficientForRadius = 0.4

export const Store = types
  .model('Game', {
    currentActivePlayer: types.maybeNull(types.string),
    gameProgress: GameProgressModel,
    isLoaded: types.boolean,
  })
  .views((game) => ({
    // FOR DYNAMIC MESSAGE SHOW
    get canBeCompletedStep1() {
      const { first, second } = game.gameProgress.step1_DiceResult
      return Boolean(first && second)
    },
    get canBeCompletedStep2() {
      return Boolean(game.gameProgress.step2_SelectedPlaceToBuild.placeId)
    },
    get canBeCompletedStep3() {
      return Boolean(game.gameProgress.step3_IsBuildStarted.isPlaceBuildStart)
    },
    get canBeCompletedStep4() {
      return Boolean(game.gameProgress.step4_IsBuildFinished.IsBuildFinished)
    },
    get rollTheDiceResult() {
      const { first, second } = game.gameProgress.step1_DiceResult
      return first + second
    },
    get calculatedRadius() {
      const { first, second } = game.gameProgress.step1_DiceResult
      return (coefficientForRadius * (first + second)).toFixed()
    },
    get radiusInMeters() {
      const { first, second } = game.gameProgress.step1_DiceResult
      return 1000 * coefficientForRadius * (first + second)
    },
    get stepForComplete() {
      const { gameProgress } = game

      if (gameProgress.step4_IsBuildFinished.IsBuildFinished) {
        return 4
      }
      if (gameProgress.step3_IsBuildStarted.isPlaceBuildStart) {
        return 3
      }
      if (gameProgress.step2_SelectedPlaceToBuild.placeId) {
        return 2
      }
      return 1
    },
  }))
  .actions((game) => ({
    saveDiceResult(cubeNumber: "first" | "second", value: number) {
      game.gameProgress.step1_DiceResult[cubeNumber] = value
    },
    resetDiceResult() {
      game.gameProgress.step1_DiceResult = {
        first: 0,
        second: 0,
        isCompleted: false,
      }
    },
  }))

const InitialData = {
  gameProgress: {
    step1_DiceResult: {
      first: null,
      second: null,
      isCompleted: false,
    },
    step2_SelectedPlaceToBuild: {
      placeId: null,
      isCompleted: false,
    },
    step3_IsBuildStarted: {
      isPlaceBuildStart: false,
      isCompleted: false,
    },
    step4_IsBuildFinished: {
      IsBuildFinished: false,
      isCompleted: false,
    },
  },
  currentActivePlayer: null,
  isLoaded: true,
}

export const Game = {
  Store,
  InitialData,
}
