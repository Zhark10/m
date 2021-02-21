import { types } from "mobx-state-tree"
import { TCoordinates } from "../../../utils/types/coordinates"
import { GoToCoordinatesModel } from "./Models"

const Store = types
  .model("AnimationEvent", {
    goToCoordinatesEvent: GoToCoordinatesModel,
  })
  .actions((self) => ({
    goAndComeBack(startPosition: TCoordinates, finishPosition: TCoordinates) {
      self.goToCoordinatesEvent.startPosition = startPosition
      self.goToCoordinatesEvent.finishPosition = finishPosition
    },
    goAndComeBackAnimationFinish() {
      self.goToCoordinatesEvent.startPosition = null
      self.goToCoordinatesEvent.finishPosition = null
    },
  }))
  .views((self) => ({
    get goAndComeBackActive() {
      return Boolean(
        self.goToCoordinatesEvent.finishPosition || self.goToCoordinatesEvent.startPosition,
      )
    },
  }))

const InitialData = {
  goToCoordinatesEvent: {
    startPosition: null,
    finishPosition: null,
  },
}

export const AnimationEvent = {
  Store,
  InitialData,
}
