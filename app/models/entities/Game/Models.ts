import { types } from "mobx-state-tree"

const DiceResultModel = types.union(
  types.literal(1),
  types.literal(2),
  types.literal(3),
  types.literal(4),
  types.literal(5),
  types.literal(6)
)

const GameProgressModel = types.model({
  step1_DiceResult: types.maybeNull(DiceResultModel),
  step2_SelectedPlaceToBuild: types.maybeNull(types.identifier),
  step3_IsBuildStarted: types.maybeNull(types.boolean),
  step4_IsBuildFinished: types.maybeNull(types.boolean),
})

const Model = types.model({
  id: types.identifier,
  currentActivePlayer: types.string,
  gameProgress: GameProgressModel,
  isLoaded: types.boolean,
})

export const Game = {
  Model,
}
