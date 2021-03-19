import { types } from "mobx-state-tree"
import { TCoordinates } from "../../../utils/types/coordinates"
import { GoToCoordinatesModel } from "./Models"

const Store = types
  .model("AnimationEvent", {
    goToCoordinatesEvent: GoToCoordinatesModel,
  })
  .actions((animationEvent) => ({
    goAndComeBack(startPosition: TCoordinates, finishPosition: TCoordinates) {
      animationEvent.goToCoordinatesEvent.startPosition = startPosition
      animationEvent.goToCoordinatesEvent.finishPosition = finishPosition
    },
    goAndComeBackAnimationFinish() {
      animationEvent.goToCoordinatesEvent.startPosition = null
      animationEvent.goToCoordinatesEvent.finishPosition = null
    },
  }))
  .views((animationEvent) => ({
    get goAndComeBackActive() {
      return Boolean(
        animationEvent.goToCoordinatesEvent.finishPosition ||
          animationEvent.goToCoordinatesEvent.startPosition,
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
