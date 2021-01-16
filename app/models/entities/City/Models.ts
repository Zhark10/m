import { types } from "mobx-state-tree"

const Coordinate = types.model({
  latitude: types.number,
  longitude: types.number,
})

export const Place = types.model({
  id: types.identifier,
  organizationName: types.string,
  organizationOwner: types.string,
  cost: types.number,
  coordinates: Coordinate,
  isAvailable: types.boolean,
})
