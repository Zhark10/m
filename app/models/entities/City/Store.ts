import { types } from "mobx-state-tree"
import { Place } from "./Models"

const Store = types
  .model("City", {
    availablePlaces: types.array(Place),
    places: types.array(Place),
    currentPlace: types.maybeNull(Place),
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
