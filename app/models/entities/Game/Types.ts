import { Instance } from "mobx-state-tree"
import { Game } from "./Store"

type TGameModel = typeof Game.Store
export interface TGame extends Instance<TGameModel> { }
