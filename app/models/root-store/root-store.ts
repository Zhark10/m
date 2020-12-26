import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthInfo } from "../entities/AuthInfo"
import { User } from "../entities/User"
import { CityPlace } from "../entities/CityPlace"

export const RootStoreModel = types.model("RootStore").props({
  authInfo: types.optional(AuthInfo.Model, AuthInfo.DefaultState),
  me: types.optional(User.Model, User.DefaultState),
  friends: types.array(User.Model),
  cityPlaces: types.array(CityPlace.Model),
  cityPlace: types.optional(CityPlace.Model, CityPlace.DefaultState),
})

export interface RootStore extends Instance<typeof RootStoreModel> { }
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }
