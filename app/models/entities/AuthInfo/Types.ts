import { Instance } from "mobx-state-tree"
import { AuthInfo } from "./Models"

export type TAuthModel = typeof AuthInfo.Model
export interface TAuth extends Instance<TAuthModel> { }
