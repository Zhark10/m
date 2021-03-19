/* eslint-disable @typescript-eslint/no-unused-vars */
import { types } from "mobx-state-tree"

const Model = types
  .model("MessageState", {
    title: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    buttonText: types.maybeNull(types.string),
  })
  .actions((currentMessageState) => ({
    showMessage(message) {
      currentMessageState.title = message.title
      currentMessageState.description = message.description
      currentMessageState.buttonText = message.buttonText
    },
    hideMessage() {
      currentMessageState.title = null
      currentMessageState.description = null
      currentMessageState.buttonText = null
    },
  }))
  .views((currentMessageState) => ({
    get isShow() {
      return Boolean(currentMessageState.title)
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
