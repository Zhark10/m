import { types } from "mobx-state-tree"

const Model = types.model({
  id: types.identifier,
  token: types.string,
  isLoaded: types.boolean,
})

export const Auth = {
  Model,
}
