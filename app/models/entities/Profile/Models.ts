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

export const Profile = {
  Model,
}
