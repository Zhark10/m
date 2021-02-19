import { Instance } from "mobx-state-tree"
import { AnimationEvent } from "./Store"

type TAnimationEventStore = typeof AnimationEvent.Store
export interface TAnimationEvent extends Instance<TAnimationEventStore> {}
