import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { Auth } from "../entities/Auth/Models"
import { City } from "../entities/City/Store"
import { Game } from "../entities/Game/Models"
import { Profile } from "../entities/Profile/Models"

const NestedStores = {
  city: types.optional(City.Store, {
    places: [],
    currentPlace: null,
  }),
}

const SimpleModels = {
  auth: types.maybeNull(Auth.Model),
  profile: types.maybeNull(Profile.Model),
  game: types.maybeNull(Game.Model),
}

export const RootStoreModel = types.model("RootStore", {
  ...SimpleModels,
  ...NestedStores
})

export interface RootStore extends Instance<typeof RootStoreModel> { }
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }
