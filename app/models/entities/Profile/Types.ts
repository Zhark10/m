import { Instance } from "mobx-state-tree"
import { Profile } from "./Models"

type TProfileModel = typeof Profile.Model
export interface TProfile extends Instance<TProfileModel> { }
