import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { Auth } from "../entities/Auth/Models"
import { City } from "../entities/City/Store"
import { Game } from "../entities/Game/Store"
import { Message } from "../entities/Message/Models"
import { Profile } from "../entities/Profile/Models"

const NestedStores = {
  city: types.optional(City.Store, City.InitialData),
  game: types.optional(Game.Store, Game.InitialData),
}

const SimpleModels = {
  auth: types.maybeNull(Auth.Model),
  profile: types.optional(Profile.Model, Profile.InitialData),
  message: types.optional(Message.Model, {
    title: "",
    description: "",
    buttonText: "",
  }),
}

export const RootStoreModel = types.model("RootStore", {
  ...SimpleModels,
  ...NestedStores,
})

export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
