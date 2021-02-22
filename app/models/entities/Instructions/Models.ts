import { types } from "mobx-state-tree"

const Model = types.model({
  myHouseMarkerWasViewed: types.boolean,
})

const InitialData = {
  myHouseMarkerWasViewed: false,
}

export const Instructions = {
  Model,
  InitialData,
}
