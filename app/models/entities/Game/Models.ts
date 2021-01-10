import { types } from "mobx-state-tree"

const Cube = types.model({
  first: types.maybeNull(types.number),
  second: types.maybeNull(types.number),
})

export const GameProgressModel = types.model("GameProgress", {
  step1_DiceResult: types.maybeNull(Cube),
  step2_SelectedPlaceToBuild: types.maybeNull(types.string),
  step3_IsBuildStarted: types.maybeNull(types.boolean),
  step4_IsBuildFinished: types.maybeNull(types.boolean),
})
