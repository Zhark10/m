/* eslint-disable react-native/no-inline-styles */
import React, { Fragment } from "react"
import { Image, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Screen } from "../../components"
import { color } from "../../theme"
import MapView, { Circle, Marker, Polyline } from "react-native-maps"
import { MapScreenStyles } from "./MapScreen-Styles"
import { customMapStyles } from "../welcome/WelcomeScreen-CustomMapStyles"
import { useMap } from "./MapScreen-VM"
import { GamePanel } from "./MapScreen-Elements/GamePanel/GamePanel"
import Animated from "react-native-reanimated"
import { CustomOptions } from "./MapScreen-Elements/CustomOptions/CustomOptions"
import { AnimatedMessage } from "./MapScreen-Elements/AnimatedMessage/AnimatedMessage"
import { getCardColorByCost } from "../../utils/helpers/get-color"
import { HouseMarker } from "./MapScreen-Elements/HouseMarker/HouseMarker"
// import { BuildingIcon } from "../../components/svg/Building_1"

const markerImageUrl = require("../../../assets/brand/marker3.png")
const meMarker = require("../../../assets/brand/logo_2.png")

export const myInitialPosition = {
  latitude: 56.62830507073426,
  longitude: 47.895421717849814,
}

export const myHouseLocation = {
  latitude: 56.62418812238768,
  longitude: 47.951626516682246,
}

export const MapScreen = observer(function MapScreen() {
  const vm = useMap()
  const {
    data: { animationStyles, places, isMapTouched, mapViewRef, radiusInMeters, defaultCoordinates },
    methods,
  } = vm

  return (
    <View testID="MapScreen" style={MapScreenStyles.FULL}>
      <Screen
        style={MapScreenStyles.CONTAINER}
        preset="scroll"
        backgroundColor={color.palette.black}
        statusBar="light-content"
      >
        <Animated.View
          style={[MapScreenStyles.MAP_VIEW_CONTAINER, animationStyles.mapViewContainerStyles]}
        >
          <MapView
            ref={mapViewRef}
            customMapStyle={customMapStyles}
            style={MapScreenStyles.MAP_VIEW}
            onTouchStart={methods.mapTouchStart}
            onTouchCancel={methods.mapTouchEnd}
            onTouchEnd={methods.mapTouchEnd}
            initialRegion={{ ...defaultCoordinates, latitude: defaultCoordinates.latitude - 0.01 }}
          >
            {places.map((place) => (
              <Fragment key={place.organizationName}>
                <Marker
                  title={place.organizationName}
                  description={place.organizationOwner}
                  coordinate={place.coordinates}
                  style={[
                    MapScreenStyles.BUILDING,
                    {
                      backgroundColor: place.isAvailable ? getCardColorByCost(place.cost) : color.transparent
                    },
                  ]}
                >
                  <Image source={markerImageUrl} style={[
                    MapScreenStyles.BUILDING_IMAGE,
                    { tintColor: methods.getIconByConditions(place.isAvailable).iconColor }
                  ]} />
                </Marker>
                {place.isAvailable && (
                  <Polyline
                    key={place.id}
                    coordinates={[defaultCoordinates, place.coordinates]}
                    strokeColor={color.palette.black}
                    strokeWidth={1}
                  />
                )}
              </Fragment>
            ))}
            <Circle
              center={defaultCoordinates}
              radius={radiusInMeters}
              strokeWidth={2}
              strokeColor={color.palette.gold}
              fillColor={color.palette.opacity.gold32}
            />
            <Marker
              key={"meLocation"}
              coordinate={defaultCoordinates}
              style={MapScreenStyles.ME_MARKER}
            >
              <Image source={meMarker} style={MapScreenStyles.ME_IMAGE} />
            </Marker>
            <Marker
              key={"myHouseLocation"}
              coordinate={myHouseLocation}
            >
              <HouseMarker />
            </Marker>
          </MapView>
        </Animated.View>
        <GamePanel isMapTouched={isMapTouched} />
        <AnimatedMessage />
        <CustomOptions />
      </Screen>
    </View>
  )
})
