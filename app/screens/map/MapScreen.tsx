import React from "react"
import { Alert, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen } from "../../components"
import { color } from "../../theme"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { MapScreenStyles } from "./MapScreen-Styles"
import { customMapStyles } from "../welcome/WelcomeScreen-CustomMapStyles"
import uuid from "react-native-uuid"
import { useMap } from "./MapScreen-VM"
import { GamePanel } from "./MapScreen-Components/GamePanel/GamePanel"
import Animated from "react-native-reanimated"
import Fontisto from 'react-native-vector-icons/Fontisto'

const defaultCoordinates = {
  latitude: 56.62830507073426,
  longitude: 47.895421717849814,
  latitudeDelta: 0.03607053635663959,
  longitudeDelta: 0.03553391019821106,
}

const example = {
  id: uuid.v1(),
  organizationName: 'dfgsfg',
  organizationOwner: 'dfcvb',
  coordinates: {
    latitude: 56.62569036318235,
    latitudeDelta: 0.03607781409303357,
    longitude: 47.95071909758627,
    longitudeDelta: 0.03553391019821106
  },
  isLoaded: false,
}

export const MapScreen = observer(function MapScreen() {
  const vm = useMap()
  const { data: { places, animationStyles, isMapTouched }, methods } = vm

  return (
    <View testID="MapScreen" style={MapScreenStyles.FULL}>
      <Screen style={MapScreenStyles.CONTAINER} preset="scroll" backgroundColor={color.transparent} statusBar="dark-content">
        <Animated.View style={[MapScreenStyles.MAP_VIEW_CONTAINER, animationStyles.mapViewContainerStyles]}>
          <MapView
            customMapStyle={customMapStyles}
            style={MapScreenStyles.MAP_VIEW}
            onTouchStart={methods.mapTouchStart}
            onTouchCancel={methods.mapTouchEnd}
            onTouchEnd={methods.mapTouchEnd}
            // onPanDrag={()=>{Alert.alert('sdf')}}
            zoomEnabled={true}
            initialRegion={defaultCoordinates}
          >
            <Marker coordinate={defaultCoordinates} style={MapScreenStyles.ME_MARKER}>
              <Fontisto name="person" style={MapScreenStyles.ME_ICON} />
            </Marker>
            {
              places.map((place) => (
                <Marker
                  key={place.id}
                  title="This is a title"
                  description="This is a description"
                  coordinate={place.coordinates}
                />
              ))
            }
          </MapView>
        </Animated.View>
        <GamePanel isMapTouched={isMapTouched}/>
      </Screen>
    </View>
  )
})
