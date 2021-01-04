import { Instance } from "mobx-state-tree"
import { Game } from "./Models"

type TGameModel = typeof Game.Model
export interface TGame extends Instance<TGameModel> { }
