import { Instance, types } from "mobx-state-tree"
import uuid from 'react-native-uuid'

const Coordinate = types.model({
  latitude: types.number,
  longitude: types.number,
  latitudeDelta: types.number,
  longitudeDelta: types.number,
})

const Model = types.model({
  id: types.identifier,
  organizationName: types.string,
  organizationOwner: types.string, // uid
  coordinates: types.array(Coordinate),
  isLoaded: types.boolean,
})

const DefaultState = {
  id: uuid.v1(),
  organizationName: '',
  organizationOwner: '',
  coordinates: [],
  isLoaded: false,
}

export const CityPlace = {
  Model,
  DefaultState,
}

export interface TCityPlace extends Instance<typeof Model> { }
