import { Instance } from "mobx-state-tree"
import { User } from "./Models"

type TUserModel = typeof User.Model
export interface TUser extends Instance<TUserModel> { }
