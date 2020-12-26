import { Instance, types } from "mobx-state-tree"

export const UserModel = types.model({
  id: types.identifier,
  firstName: types.string,
  secondName: types.string,
  nickname: types.string,
  age: types.string,
})

export interface TUser extends Instance<typeof UserModel> {}
