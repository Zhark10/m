import { types } from "mobx-state-tree"

const Coordinate = types.model({
  latitude: types.number,
  longitude: types.number,
})

export const GoToCoordinatesModel = types.model({
  startPosition: types.maybeNull(Coordinate),
  finishPosition: types.maybeNull(Coordinate),
})
