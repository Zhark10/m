import { useNavigation } from "@react-navigation/native"
import { useCallback } from "react"
import { useStores } from "../../models"

export enum EIconType {
  LEFT,
  RIGHT,
}

export const useProfile = () => {
  const navigation = useNavigation()
  const goToMap = useCallback(() => navigation.navigate("map"), [])
  const { profile } = useStores()

  const footerOptions = [
    {
      buttonTitle: "profileScreen.continue",
      onPress: goToMap,
    },
  ]

  return {
    data: {
      profile,
      footerOptions,
    },
    methods: { goToMap },
  }
}
