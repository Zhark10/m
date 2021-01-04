import { types } from "mobx-state-tree"
import uuid from "react-native-uuid"
import { Place } from "./Models"

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
      const newPlaces: any = self.places.filter(place => place.id !== selectedPlace.id)
      self.places = newPlaces
    },
    resetAll() {
      self.places = [] as any
    }
  }))

export const City = {
  Store,
}
