import { Instance, types } from "mobx-state-tree"
import uuid from 'react-native-uuid'

const Model = types.model({
  id: types.identifier,
  token: types.string,
  isLoaded: types.boolean,
})

const DefaultState = {
  id: uuid.v1(),
  token: '',
  isLoaded: false,
}

export const AuthInfo = {
  Model,
  DefaultState,
}

export interface TAuthInfo extends Instance<typeof Model> {}
