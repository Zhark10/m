import { Instance, types } from "mobx-state-tree"

const Coordinate = types.model({
  latitude: types.number,
  longitude: types.number,
  latitudeDelta: types.number,
  longitudeDelta: types.number,
})

export const PlaceModel = types.model({
  id: types.identifier,
  organizationName: types.string,
  organizationOwner: types.string, // uid
  coordinates: types.array(Coordinate),
})

export interface TCityPlace extends Instance<typeof PlaceModel> { }
