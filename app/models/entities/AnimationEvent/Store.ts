import { types } from "mobx-state-tree"
import { TCoordinates } from "../../../utils/types/coordinates"
import { GoToCoordinatesModel } from "./Models"

const Store = types
  .model("AnimationEvents", {
    goToCoordinatesEvent: GoToCoordinatesModel,
  })
  .actions((animationEvents) => ({
    goAndComeBack(startPosition: TCoordinates, finishPosition: TCoordinates) {
      animationEvents.goToCoordinatesEvent.startPosition = startPosition
      animationEvents.goToCoordinatesEvent.finishPosition = finishPosition
    },
    goAndComeBackAnimationFinish() {
      animationEvents.goToCoordinatesEvent.startPosition = null
      animationEvents.goToCoordinatesEvent.finishPosition = null
    },
  }))
  .views((animationEvents) => ({
    get goAndComeBackActive() {
      return Boolean(
        animationEvents.goToCoordinatesEvent.finishPosition ||
          animationEvents.goToCoordinatesEvent.startPosition,
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
