import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { runOnJS } from "react-native-reanimated"
import { useStores } from "../../models"
import { color } from "../../theme"
import { MapScreenAnimations } from "./MapScreen-Animations"

export const useMap = () => {
  const mapViewRef = useRef(null)
  const navigation = useNavigation()
  const goToWelcome = useCallback(() => navigation.navigate("welcome"), [])
  const {
    city: { places, currentPlace, resetAll, selectPlace, placesInitializeRequest },
    game: { radiusInMeters, gameProgress },
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

  const getIconByConditions = (
    isAvailable: boolean,
  ): { iconName: string; iconBackground: string; iconColor: string } => {
    if (!gameProgress.step1_DiceResult.first) {
      return {
        iconName: "emoji-neutral",
        iconBackground: color.palette.white,
        iconColor: color.palette.black,
      }
    }

    if (isAvailable) {
      return {
        iconName: "emoji-flirt",
        iconBackground: color.palette.white,
        iconColor: color.palette.gold,
      }
    } else {
      return {
        iconName: "emoji-sad",
        iconBackground: color.palette.white,
        iconColor: color.palette.red,
      }
    }
  }

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
      getIconByConditions,
    },
  }
}
