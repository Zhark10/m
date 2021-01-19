import { Instance } from "mobx-state-tree"
import { City } from "./Store"

type TCityStore = typeof City.Store
export interface TCity extends Instance<TCityStore> {}
