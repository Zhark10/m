import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useRef, useState } from "react"
import { useStores } from "../../models"
import { MapScreenAnimations } from "./MapScreen-Animations"

export const useMap = () => {
  const mapViewRef = useRef(null)
  const navigation = useNavigation()
  const goToWelcome = useCallback(() => navigation.navigate("welcome"), [])
  const { city: { places, currentPlace, addPlace, removePlace, resetAll, selectPlace }, game: { calculatedRadius } } = useStores()
  const { style: mapViewContainerStyles } = MapScreenAnimations.useMapViewContainerAnimation()
  const [isMapTouched, setTouched] = useState(false)

  const mapTouchEnd = () => {
    setTouched(false)
  }

  const mapTouchStart = () => {
    setTouched(true)
  }

  useEffect(() => {
    selectPlace(null)
    resetAll()
  }, [])

  useEffect(function goToRegion() {
    if (currentPlace) {
      mapViewRef.current?.animateToRegion(currentPlace.coordinates, 500)
    }
  }, [currentPlace])

  return {
    data: {
      animationStyles: {
        mapViewContainerStyles
      },
      mapViewRef,
      isMapTouched,
      places,
      currentPlace,
      radiusInMeters: 1000 * calculatedRadius,
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
