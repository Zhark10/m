import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { Auth } from "../entities/Auth/Models"
import { City } from "../entities/City/Store"
import { Game } from "../entities/Game/Store"
import { Message } from "../entities/Message/Models"
import { Profile } from "../entities/Profile/Models"

const NestedStores = {
  city: types.optional(City.Store, {
    places: City.fake.places,
    currentPlace: null,
  }),
  game: types.optional(Game.Store, {
    gameProgress: {
      step1_DiceResult: {
        first: null,
        second: null,
        isCompleted: false,
      },
      step2_SelectedPlaceToBuild: {
        placeId: null,
        isCompleted: false,
      },
      step3_IsBuildStarted: {
        isPlaceBuildStart: false,
        isCompleted: false,
      },
      step4_IsBuildFinished: {
        IsBuildFinished: false,
        isCompleted: false,
      },
    },
    currentActivePlayer: null,
    isLoaded: true,
  }),
}

const SimpleModels = {
  auth: types.maybeNull(Auth.Model),
  profile: types.optional(Profile.Model, {
    age: 26,
    firstName: "Arkady",
    secondName: "Zharavin",
    nickname: "Zhark10",
    meMoney: 25000,
    playerColor: "green",
    isLoaded: true,
  }),
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
