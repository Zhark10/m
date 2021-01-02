import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthInfo } from "../entities/AuthInfo"
import { User } from "../entities/User"
import { City } from "../entities/CityPlace"

export const RootStoreModel = types.model("RootStore", {
  authInfo: types.optional(AuthInfo.Model, AuthInfo.DefaultState),
  me: types.optional(User.Model, User.DefaultState),
  friends: types.array(User.Model),
  city: types.optional(City.Store, {}),
})

export interface RootStore extends Instance<typeof RootStoreModel> { }
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }
