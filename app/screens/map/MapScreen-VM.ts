import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { runOnJS } from "react-native-reanimated"
import { myInitialPosition } from ".."
import { useStores } from "../../models"
import { color } from "../../theme"
import { screenWidth, screenHeight } from "../../utils/screen"
import { MapScreenAnimations } from "./MapScreen-Animations"

const ASPECT_RATIO = screenWidth / screenHeight
const LATITUDE_DELTA = 0.12

export const useMap = () => {
  const mapViewRef = useRef(null)
  const navigation = useNavigation()
  const goToWelcome = useCallback(() => navigation.navigate("welcome"), [])
  const goToProfile = useCallback(() => navigation.navigate("profile"), [])
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

  useEffect(function initialize() {
    selectPlace(null)
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

  const defaultCoordinates = useMemo(
    () => ({
      ...myInitialPosition,
      latitudeDelta:
        // radiusInMeters
        //   ? LATITUDE_DELTA * radiusInMeters
        //   :
        LATITUDE_DELTA,
      longitudeDelta:
        // radiusInMeters
        //   ? LATITUDE_DELTA * ASPECT_RATIO * radiusInMeters
        //   :
        LATITUDE_DELTA * ASPECT_RATIO,
    }),
    [radiusInMeters],
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
      defaultCoordinates,
    },
    methods: {
      goToWelcome,
      goToProfile,
      mapTouchEnd,
      mapTouchStart,
      getIconByConditions,
    },
  }
}
