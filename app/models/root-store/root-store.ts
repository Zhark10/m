import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AnimationEvent } from "../entities/AnimationEvent/Store"
import { Auth } from "../entities/Auth/Models"
import { City } from "../entities/City/Store"
import { Game } from "../entities/Game/Store"
import { Instructions } from "../entities/Instructions/Models"
import { Message } from "../entities/Message/Models"
import { Profile } from "../entities/Profile/Models"

const NestedStores = {
  city: types.optional(City.Store, City.InitialData),
  game: types.optional(Game.Store, Game.InitialData),
  animationEvent: types.optional(AnimationEvent.Store, AnimationEvent.InitialData),
}

const SimpleModels = {
  auth: types.maybeNull(Auth.Model),
  instructions: types.optional(Instructions.Model, Instructions.InitialData),
  profile: types.optional(Profile.Model, Profile.InitialData),
  message: types.optional(Message.Model, Message.InitialData),
}

export const RootStoreModel = types.model("RootStore", {
  ...SimpleModels,
  ...NestedStores,
})

export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
