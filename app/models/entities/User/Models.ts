import { types } from "mobx-state-tree"
import uuid from 'react-native-uuid'

const Model = types.model({
  id: types.identifier,
  firstName: types.string,
  secondName: types.string,
  nickname: types.string,
  age: types.number,
  isLoaded: types.boolean,
})

const DefaultState = {
  id: uuid.v1(),
  firstName: '',
  secondName: '',
  nickname: '',
  age: 0,
  isLoaded: false,
}

export const User = {
  Model,
  DefaultState,
}
