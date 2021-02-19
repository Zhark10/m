import { types } from "mobx-state-tree"
import { GoToCoordinatesModel } from "./Models"

const Store = types
  .model("AnimationEvent", {
    goToCoordinatesEvent: GoToCoordinatesModel
  })
  .actions((self) => ({

  }))
  .views((self) => ({

  }))

const InitialData = {
}

export const AnimationEvent = {
  Store,
  InitialData,
}
