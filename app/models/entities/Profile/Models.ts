import { types } from "mobx-state-tree"

const Model = types.model({
  id: types.identifier,
  firstName: types.string,
  secondName: types.string,
  nickname: types.string,
  age: types.number,
  isLoaded: types.boolean,
})

export const Profile = {
  Model,
}
