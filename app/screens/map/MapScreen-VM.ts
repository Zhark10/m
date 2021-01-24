import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useRef, useState } from "react"
import { runOnJS } from "react-native-reanimated"
import { useStores } from "../../models"
import { MapScreenAnimations } from "./MapScreen-Animations"

export const useMap = () => {
  const mapViewRef = useRef(null)
  const navigation = useNavigation()
  const goToWelcome = useCallback(() => navigation.navigate("welcome"), [])
  const {
    city: { places, currentPlace, resetAll, selectPlace, placesInitializeRequest },
    game: { radiusInMeters },
  } = useStores()
  const { style: mapViewContainerStyles } = MapScreenAnimations.useMapViewContainerAnimation()
  const [isMapTouched, setTouched] = useState(false)

  const mapTouchEnd = () => {
    "worklet"
    runOnJS(() => setTouched(false))()
  }

  const mapTouchStart = () => {
    "worklet"
    runOnJS(() => setTouched(true))()
  }

  useEffect(() => {
    selectPlace(null)
    resetAll()
    placesInitializeRequest()
  }, [])

  useEffect(
    function goToRegion() {
      if (currentPlace) {
        mapViewRef.current?.animateToRegion(currentPlace.coordinates, 500)
      }
    },
    [currentPlace],
  )

  return {
    data: {
      animationStyles: {
        mapViewContainerStyles,
      },
      mapViewRef,
      isMapTouched,
      places,
      currentPlace,
      radiusInMeters,
    },
    methods: {
      goToWelcome,
      mapTouchEnd,
      mapTouchStart,
    },
  }
}
