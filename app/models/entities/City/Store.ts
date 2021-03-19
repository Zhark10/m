import getDistance from "geolib/es/getDistance"
import { types } from "mobx-state-tree"
import uuid from "react-native-uuid"
import { myInitialPosition } from "../../../screens/map/MapScreen-VM"
import { Place } from "./Models"

const Store = types
  .model("City", {
    places: types.array(Place),
    currentPlace: types.maybeNull(types.reference(Place)),
  })
  .actions((currentCity) => ({
    setAvailablePlaces(radiusInMeters) {
      const newPlaces: any = currentCity.places.slice().map((place) => {
        const isApprovedDistance =
          getDistance(place.coordinates, myInitialPosition) <= radiusInMeters
        if (isApprovedDistance) {
          return { ...place, isAvailable: true }
        }
        return place
      })
      currentCity.places = newPlaces
    },
    selectPlace(selectedPlace) {
      currentCity.currentPlace = selectedPlace
    },
    resetSelectedPlace() {
      currentCity.currentPlace = null
    },
    resetAll() {
      currentCity.places = [] as any
    },
    placesInitializeRequest() {
      currentCity.places = City.InitialData.places as any
    },
  }))
  .views((currentCity) => ({
    get availablePlaces() {
      return [...currentCity.places.filter((place) => place.isAvailable)]
    },
  }))

const fake = {
  allPlaces: [
    {
      id: uuid.v1(),
      organizationName: "Меделан",
      organizationOwner: "Руслан",
      cost: 100,
      coordinates: {
        latitude: 56.63591803038669,
        longitude: 47.89490247015194,
      },
      isAvailable: false,
    },
    {
      id: uuid.v1(),
      organizationName: "Милано",
      organizationOwner: "Аркадий",
      cost: 250,
      coordinates: {
        latitude: 56.632995304311706,
        longitude: 47.89647699840446,
      },
      isAvailable: false,
    },
    {
      id: uuid.v1(),
      organizationName: "Большое Чикаго",
      organizationOwner: "Дарья",
      cost: 325,
      coordinates: {
        latitude: 56.62619643107053,
        longitude: 47.90449972723952,
      },
      isAvailable: false,
    },
    {
      id: uuid.v1(),
      organizationName: "Yolka",
      organizationOwner: "Алексей",
      cost: 400,
      coordinates: {
        latitude: 56.62803830375752,
        longitude: 47.9298039984042,
      },
      isAvailable: false,
    },
    {
      id: uuid.v1(),
      organizationName: "Инь-Янь",
      organizationOwner: "Юрий",
      cost: 500,
      coordinates: {
        latitude: 56.63783625365767,
        longitude: 47.886623710890234,
      },
      isAvailable: false,
    },
  ],
}

const InitialData = {
  places: fake.allPlaces,
  currentPlace: null,
}

export const City = {
  Store,
  InitialData,
}
