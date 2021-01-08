import { types } from "mobx-state-tree"
import uuid from "react-native-uuid"
import { Place } from "./Models"

const Store = types
  .model("City", {
    availablePlaces: types.array(Place),
    places: types.array(Place),
    currentPlace: types.maybeNull(types.reference(Place)),
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
    },
    selectPlace(selectedPlace) {
      self.currentPlace = selectedPlace
    },
  }))

const fake = {
  availablePlaces: [
    {
      id: uuid.v1(),
      organizationName: 'Милано',
      organizationOwner: 'Me',
      cost: 100,
      coordinates: {
        latitude: 56.63919557073426,
        longitude: 47.89941117849814,
        latitudeDelta: 0.03607053635663959,
        longitudeDelta: 0.03553391019821106,
      },
      isLoaded: false,
    },
    {
      id: uuid.v1(),
      organizationName: 'Большое Чикаго',
      organizationOwner: 'Me',
      cost: 150,
      coordinates: {
        latitude: 56.63919557073426,
        longitude: 47.88141117849814,
        latitudeDelta: 0.03607053635663959,
        longitudeDelta: 0.03553391019821106,
      },
      isLoaded: false,
    },
    {
      id: uuid.v1(),
      organizationName: 'Yolka',
      organizationOwner: 'Me',
      cost: 200,
      coordinates: {
        latitude: 56.62130577073426,
        longitude: 47.89842517849814,
        latitudeDelta: 0.03607053635663959,
        longitudeDelta: 0.03553391019821106,
      },
      isLoaded: false,
    },
  ]
}

export const City = {
  Store,
  fake: {
    availablePlaces: fake.availablePlaces
  }
}
