import { Instance, types } from "mobx-state-tree"
import uuid from 'react-native-uuid'

const Coordinate = types.model({
  latitude: types.number,
  longitude: types.number,
  latitudeDelta: types.number,
  longitudeDelta: types.number,
})

const Place = types.model({
  id: types.identifier,
  organizationName: types.string,
  organizationOwner: types.string, // uid
  coordinates: Coordinate,
  isLoaded: types.boolean,
})

const DefaultState = {
  id: uuid.v1(),
  organizationName: '',
  organizationOwner: '',
  coordinates: {
    latitude: 56.62569036318235,
    latitudeDelta: 0.03607781409303357,
    longitude: 47.95071909758627,
    longitudeDelta: 0.03553391019821106
  },
  isLoaded: false,
}

const Store = types
  .model("City", {
    places: types.array(Place),
    currentPlace: types.optional(Place, DefaultState),
  })
  .actions(self => ({
    addPlace(selectedPlace) {
      self.places.push(selectedPlace)
    },
    removePlace(selectedPlace) {
      self.places.remove(selectedPlace)
    }
  }))

type TStore = typeof Store
export interface TCityPlace extends Instance<TStore> { }

export const City = {
  Store,
  DefaultState,
}
