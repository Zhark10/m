import { types } from "mobx-state-tree"

const Model = types.model({
  firstName: types.string,
  secondName: types.string,
  nickname: types.string,
  age: types.maybeNull(types.number),
  playerColor: types.string,
  meMoney: types.number,
  isLoaded: types.boolean,
})

const InitialData = {
  age: 26,
  firstName: "Arkady",
  secondName: "Zharavin",
  nickname: "Zhark10",
  meMoney: 26000,
  playerColor: "green",
  isLoaded: true,
}

export const Profile = {
  Model,
  InitialData,
}
