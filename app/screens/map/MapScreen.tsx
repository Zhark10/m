import React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Screen } from "../../components"
import { color } from "../../theme"
import MapView, { Marker, Polygon, Polyline } from "react-native-maps"
import { MapScreenStyles } from "./MapScreen-Styles"
import { customMapStyles } from "../welcome/WelcomeScreen-CustomMapStyles"
import { useMap } from "./MapScreen-VM"
import { GamePanel } from "./MapScreen-Components/GamePanel/GamePanel"
import Animated from "react-native-reanimated"
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { screenHeight, screenWidth } from "../../utils/screen"
import { CustomOptions } from "./MapScreen-Components/CustomOptions/CustomOptions"
import { AnimatedMessage } from "./MapScreen-Components/AnimatedMessage/AnimatedMessage"

const ASPECT_RATIO = screenWidth / screenHeight
const LATITUDE_DELTA = 0.075

const defaultCoordinates = {
  latitude: 56.62830507073426,
  longitude: 47.895421717849814,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
}

export const MapScreen = observer(function MapScreen() {
  const vm = useMap()
  const { data: { animationStyles, availablePlaces, isMapTouched, mapViewRef }, methods } = vm

  return (
    <View testID="MapScreen" style={MapScreenStyles.FULL}>
      <Screen style={MapScreenStyles.CONTAINER} preset="scroll" backgroundColor={color.palette.black} statusBar="light-content">
        <Animated.View style={[
          MapScreenStyles.MAP_VIEW_CONTAINER,
          animationStyles.mapViewContainerStyles
        ]}>
          <MapView
            ref={mapViewRef}
            customMapStyle={customMapStyles}
            style={MapScreenStyles.MAP_VIEW}
            onTouchStart={methods.mapTouchStart}
            onTouchCancel={methods.mapTouchEnd}
            onTouchEnd={methods.mapTouchEnd}
            initialRegion={defaultCoordinates}
          >
            <Marker key={'zhark10'} coordinate={defaultCoordinates} style={MapScreenStyles.ME_MARKER}>
              <Fontisto name="person" style={MapScreenStyles.ME_ICON} />
            </Marker>
            {
              availablePlaces.map((place) => (
                <Marker key={place.organizationName} title={place.organizationName} description={place.organizationOwner} coordinate={place.coordinates} style={MapScreenStyles.BUILDING}>
                  <FontAwesome5
                    name="building"
                    style={MapScreenStyles.BUILDING_ICON}
                  />
                </Marker>
              ))
            }
            <Polygon
              coordinates={[...availablePlaces.map(place => place.coordinates), availablePlaces[0].coordinates]}
              strokeColor={color.palette.opacity.gold32}
              fillColor={color.palette.opacity.gold32}
              strokeWidth={2}
            />
            {
              availablePlaces.map((place) => (
                <Polyline
                  key={place.id}
                  coordinates={[defaultCoordinates, place.coordinates]}
                  strokeColor={color.palette.gold}
                  fillColor={color.palette.gold}
                  strokeWidth={2}
                />
              ))
            }
          </MapView>
        </Animated.View>
        <AnimatedMessage />
        <CustomOptions />
        <GamePanel isMapTouched={isMapTouched} />
      </Screen>
    </View>
  )
})
