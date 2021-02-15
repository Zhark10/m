/* eslint-disable @typescript-eslint/no-unused-vars */
import { types } from "mobx-state-tree"

const Model = types
  .model({
    title: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    buttonText: types.maybeNull(types.string),
  })
  .actions((self) => ({
    showMessage(message) {
      self.title = message.title
      self.description = message.description
      self.buttonText = message.buttonText
    },
    hideMessage() {
      self.title = null
      self.description = null
      self.buttonText = null
    },
  }))
  .views((self) => ({
    get isShow() {
      return Boolean(self.title)
    },
  }))

const InitialData = {
  title: "",
  description: "",
  buttonText: "",
}

export const Message = {
  Model,
  InitialData,
}
