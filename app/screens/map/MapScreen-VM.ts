import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useRef, useState } from "react"
import { runOnJS } from "react-native-reanimated"
import { useStores } from "../../models"
import { ROUTES } from "../../navigation/routes"
import { color } from "../../theme"
import { screenWidth, screenHeight } from "../../utils/screen"
import { MapScreenAnimations } from "./MapScreen-Animations"

const ASPECT_RATIO = screenWidth / screenHeight
const LATITUDE_DELTA = 0.12

export const myInitialPosition = {
  latitude: 56.62830507073426,
  longitude: 47.895421717849814,
}

export const myHouseLocation = {
  latitude: 56.62418812238768,
  longitude: 47.951626516682246,
}

export const useMap = () => {
  const mapViewRef = useRef(null)
  const navigation = useNavigation()
  const goToWelcome = useCallback(() => navigation.navigate(ROUTES.WELCOME), [])
  const navigateToProfile = useCallback(() => {
    navigation.navigate(ROUTES.PROFILE)
  }, [])
  const {
    city: { places, currentPlace, resetAll, resetSelectedPlace, placesInitializeRequest },
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

  useEffect(function initialize() {
    resetSelectedPlace()
    resetAll()
    placesInitializeRequest()
  }, [])

  useEffect(
    function markersAutoZoom() {
      if (mapViewRef.current) {
        mapViewRef.current.fitToSuppliedMarkers(
          places.slice().map(({ organizationName }) => organizationName),
        )
      }
    },
    [places],
  )

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
        iconBackground: color.palette.black,
        iconColor: color.palette.black,
      }
    } else {
      return {
        iconName: "emoji-sad",
        iconBackground: color.transparent,
        iconColor: color.palette.black,
      }
    }
  }

  const defaultCoordinates = {
    ...myInitialPosition,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
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
      defaultCoordinates,
    },
    methods: {
      goToWelcome,
      navigateToProfile,
      mapTouchEnd,
      mapTouchStart,
      getIconByConditions,
    },
  }
}
