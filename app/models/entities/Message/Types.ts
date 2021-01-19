import { Instance } from "mobx-state-tree"
import { Message } from "./Models"

type TMessageModel = typeof Message.Model
export interface TMessage extends Instance<TMessageModel> {}
