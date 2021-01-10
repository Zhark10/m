import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { Auth } from "../entities/Auth/Models"
import { City } from "../entities/City/Store"
import { Game } from "../entities/Game/Store"
import { Profile } from "../entities/Profile/Models"

const NestedStores = {
  city: types.optional(City.Store, {
    places: [],
    currentPlace: null,
    availablePlaces: City.fake.availablePlaces
  }),
  game: types.optional(Game.Store, {
    gameProgress: {
      step1_DiceResult: {
        first: null,
        second: null
      },
      step2_SelectedPlaceToBuild: null,
      step3_IsBuildStarted: null,
      step4_IsBuildFinished: null,
    },
    currentActivePlayer: null,
    isLoaded: true,
  })
}

const SimpleModels = {
  auth: types.maybeNull(Auth.Model),
  profile: types.maybeNull(Profile.Model),
}

export const RootStoreModel = types.model("RootStore", {
  ...SimpleModels,
  ...NestedStores
})

export interface RootStore extends Instance<typeof RootStoreModel> { }
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }
