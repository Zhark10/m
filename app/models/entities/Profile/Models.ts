import { types } from "mobx-state-tree"

const Model = types.model({
  id: types.identifier,
  firstName: types.string,
  secondName: types.string,
  nickname: types.string,
  age: types.maybeNull(types.number),
  playerColor: types.maybeNull(types.string),
  isLoaded: types.boolean,
})

export const Profile = {
  Model,
}
