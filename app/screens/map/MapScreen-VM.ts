import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect } from "react"
import { useStores } from "../../models"

export const useMap = () => {
  const navigation = useNavigation()
  const goToWelcome = useCallback(() => navigation.navigate("welcome"), [])
  const { city: { places, currentPlace, addPlace, removePlace, resetAll } } = useStores()

  useEffect(() => {
    resetAll()
  }, [])

  return {
    data: {
      places,
      currentPlace,
    },
    methods: {
      addPlace,
      removePlace,
      goToWelcome,
    }
  }
}
