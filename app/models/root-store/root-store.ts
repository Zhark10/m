import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthInfo } from "../entities/AuthInfo/Models"
import { City } from "../entities/City/Store"
import { User } from "../entities/User/Models"

const NestedStores = {
  city: types.optional(City.Store, {}),
}

export const RootStoreModel = types.model("RootStore", {
  authInfo: types.optional(AuthInfo.Model, AuthInfo.DefaultState),
  me: types.optional(User.Model, User.DefaultState),
  friends: types.array(User.Model),
  ...NestedStores
})

export interface RootStore extends Instance<typeof RootStoreModel> { }
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }
