import { types } from "mobx-state-tree"

const DiceResult = types.model({
  first: types.maybeNull(types.number),
  second: types.maybeNull(types.number),
  isCompleted: types.boolean
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

export const GameProgressModel = types.model("GameProgress", {
  step1_DiceResult: DiceResult,
  step2_SelectedPlaceToBuild: SelectedPlaceToBuild,
  step3_IsBuildStarted: IsBuildStarted,
  step4_IsBuildFinished: IsBuildFinished,
})
