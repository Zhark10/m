/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
import React, { Fragment } from "react"
import { Image, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Screen } from "../../components"
import { color } from "../../theme"
import MapView, { Circle, Marker, Polyline } from "react-native-maps"
import { MapScreenStyles } from "./MapScreen-Styles"
import { customMapStyles } from "./MapScreen-CustomMapStyles"
import { myHouseLocation, useMap } from "./MapScreen-VM"
import { GamePanel } from "./MapScreen-Elements/GamePanel/GamePanel"
import Animated from "react-native-reanimated"
import { CustomOptions } from "./MapScreen-Elements/CustomOptions/CustomOptions"
import { AnimatedMessage } from "./MapScreen-Elements/AnimatedMessage/AnimatedMessage"
import { getCardColorByCost } from "../../utils/helpers/get-color"
import { HouseMarker } from "./MapScreen-Elements/HouseMarker/HouseMarker"
import { SharedElement, nodeFromRef } from "react-native-shared-element"

const markerImageUrl = require("../../../assets/brand/marker3.png")
const meMarker = require("../../../assets/brand/logo_2.png")

export const MapScreen = observer(function MapScreen() {
  const vm = useMap()
  const {
    data: { animationStyles, places, isMapTouched, mapViewRef, radiusInMeters, defaultCoordinates },
    methods,
  } = vm

  let startAncestor: any
  let startNode: any

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
            {places.slice().map((place) => (
              <Fragment key={place.organizationName}>
                <Marker
                  title={place.organizationName}
                  description={place.organizationOwner}
                  coordinate={place.coordinates}
                  style={[
                    MapScreenStyles.BUILDING,
                    {
                      backgroundColor: place.isAvailable
                        ? getCardColorByCost(place.cost)
                        : color.transparent,
                    },
                  ]}
                >
                  <Image
                    source={markerImageUrl}
                    style={[
                      MapScreenStyles.BUILDING_IMAGE,
                      { tintColor: methods.getIconByConditions(place.isAvailable).iconColor },
                    ]}
                  />
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
              onPress={methods.navigateToProfile}
              onSelect={methods.navigateToProfile}
              style={MapScreenStyles.ME_MARKER}
            >
              <View ref={(ref) => (startAncestor = nodeFromRef(ref))}>
                <SharedElement onNode={(node) => (startNode = node)}>
                  <Image source={meMarker} style={MapScreenStyles.ME_IMAGE} />
                </SharedElement>
              </View>
            </Marker>
            <Marker key={"myHouseLocation"} coordinate={myHouseLocation}>
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
