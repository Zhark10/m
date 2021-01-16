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
  allPlaces: [
    {
      id: uuid.v1(),
      organizationName: 'Меделан',
      organizationOwner: 'Руслан',
      cost: 100,
      coordinates: {
        latitude: 56.63591803038669,
        longitude: 47.89490247015194,
      },
      isLoaded: false,
    },
    {
      id: uuid.v1(),
      organizationName: 'Милано',
      organizationOwner: 'Аркадий',
      cost: 100,
      coordinates: {
        latitude: 56.632995304311706,
        longitude: 47.89647699840446,
      },
      isLoaded: false,
    },
    {
      id: uuid.v1(),
      organizationName: 'Большое Чикаго',
      organizationOwner: 'Дарья',
      cost: 150,
      coordinates: {
        latitude: 56.62619643107053,
        longitude: 47.90449972723952,
      },
      isLoaded: false,
    },
    {
      id: uuid.v1(),
      organizationName: 'Yolka',
      organizationOwner: 'Алексей',
      cost: 200,
      coordinates: {
        latitude: 56.62803830375752,
        longitude: 47.9298039984042,
      },
      isLoaded: false,
    },
    {
      id: uuid.v1(),
      organizationName: 'Инь-Янь',
      organizationOwner: 'Юрий',
      cost: 250,
      coordinates: {
        latitude: 56.63783625365767,
        longitude: 47.886623710890234,
      },
      isLoaded: false,
    },
  ]
}

export const City = {
  Store,
  fake: {
    places: fake.allPlaces
  }
}
