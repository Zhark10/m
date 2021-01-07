import { types } from "mobx-state-tree"

const Coordinate = types.model({
  latitude: types.number,
  longitude: types.number,
  latitudeDelta: types.number,
  longitudeDelta: types.number,
})

export const Place = types.model({
  id: types.identifier,
  organizationName: types.string,
  organizationOwner: types.string,
  cost: types.number,
  coordinates: Coordinate,
  isLoaded: types.boolean,
})
