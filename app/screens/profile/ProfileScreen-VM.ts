import { useNavigation } from "@react-navigation/native"
import { useCallback } from "react"

export enum EIconType {
  LEFT,
  RIGHT,
}

export const useProfile = () => {
  const navigation = useNavigation()
  const goToMap = useCallback(() => navigation.navigate("map"), [])

  return {
    data: { },
    methods: { goToMap },
  }
}
