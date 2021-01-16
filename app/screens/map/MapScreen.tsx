/* eslint-disable react-native/no-inline-styles */
import React, { Fragment } from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Screen } from "../../components"
import { color } from "../../theme"
import MapView, { Circle, Marker, Polygon, Polyline } from "react-native-maps"
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
import getDistance from 'geolib/es/getDistance'

const ASPECT_RATIO = screenWidth / screenHeight
const LATITUDE_DELTA = 0.12

export const MapScreen = observer(function MapScreen() {
  const vm = useMap()
  const { data: { animationStyles, places, isMapTouched, mapViewRef, radiusInMeters }, methods } = vm

  const defaultCoordinates = {
    latitude: 56.62830507073426,
    longitude: 47.895421717849814,
    latitudeDelta: radiusInMeters ? LATITUDE_DELTA * radiusInMeters : LATITUDE_DELTA,
    longitudeDelta: radiusInMeters ? LATITUDE_DELTA * ASPECT_RATIO * radiusInMeters : LATITUDE_DELTA * ASPECT_RATIO,
  }

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
              places.map((place) => {
                const distance = getDistance(place.coordinates, defaultCoordinates)
                const isEntersTheArea = distance <= radiusInMeters
                return (
                  <Fragment key={place.organizationName}>
                    <Marker
                      title={place.organizationName}
                      description={place.organizationOwner}
                      coordinate={place.coordinates}
                      style={[
                        MapScreenStyles.BUILDING,
                        {
                          backgroundColor: isEntersTheArea ? color.palette.gold : color.palette.black,
                          borderWidth: isEntersTheArea ? 1 : 0
                        },
                      ]}>
                      <FontAwesome5
                        name="building"
                        style={[
                          MapScreenStyles.BUILDING_ICON,
                          { color: isEntersTheArea ? color.palette.black : color.palette.white }
                        ]}
                      />
                    </Marker>
                    {
                      isEntersTheArea &&
                      <Polyline
                        key={place.id}
                        coordinates={[defaultCoordinates, place.coordinates]}
                        strokeColor={color.palette.black}
                        strokeWidth={1}
                      />
                    }
                  </Fragment>
                )
              })
            }
            {
              <Circle
                center={defaultCoordinates}
                radius={radiusInMeters}
                strokeWidth={2}
                strokeColor={color.palette.gold}
                fillColor={color.palette.opacity.gold32}
              />
            }
          </MapView>
        </Animated.View>
        <GamePanel isMapTouched={isMapTouched} />
        <AnimatedMessage />
        <CustomOptions />
      </Screen>
    </View>
  )
})
