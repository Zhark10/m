import { Instance } from "mobx-state-tree"
import { Instructions } from "./Models"

export type TInstructionsModel = typeof Instructions.Model
export interface TInstructions extends Instance<TInstructionsModel> {}
