import { Instance } from "mobx-state-tree"
import { Auth } from "./Models"

export type TAuthModel = typeof Auth.Model
export interface TAuth extends Instance<TAuthModel> {}
