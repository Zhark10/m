import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useState } from "react"
import { useStores } from "../../models"
import { MapScreenAnimations } from "./MapScreen-Animations"

export const useMap = () => {
  const navigation = useNavigation()
  const goToWelcome = useCallback(() => navigation.navigate("welcome"), [])
  const { city: { places, currentPlace, addPlace, removePlace, resetAll } } = useStores()
  const { style: mapViewContainerStyles } = MapScreenAnimations.useMapViewContainerAnimation()
  const [isMapTouched, setTouched] = useState(false)

  const mapTouchEnd = () => {
    setTouched(false)
  }

  const mapTouchStart = () => {
    setTouched(true)
  }

  useEffect(() => {
    resetAll()
  }, [])

  return {
    data: {
      animationStyles: {
        mapViewContainerStyles
      },
      isMapTouched,
      places,
      currentPlace,
    },
    methods: {
      addPlace,
      removePlace,
      goToWelcome,
      mapTouchEnd,
      mapTouchStart,
    }
  }
}
