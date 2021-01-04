import React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen } from "../../components"
import { color } from "../../theme"
import MapView, { Marker } from "react-native-maps"
import { MapScreenStyles } from "./MapScreen-Styles"
import { Cube } from "./MapScreen-Animations/Cube"
import { customMapStyles } from "../welcome/WelcomeScreen-CustomMapStyles"
import uuid from "react-native-uuid"
import { useMap } from "./MapScreen-VM"

const LATITUDE = 56.62830507073426
const LONGITUDE = 47.895421717849814
const LATITUDE_DELTA = 0.03607053635663959
const LONGITUDE_DELTA = 0.03553391019821106

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
  const { methods: { addPlace, removePlace, goToWelcome }, data: { places } } = vm

  return (
    <View testID="MapScreen" style={MapScreenStyles.FULL}>
      <Screen style={MapScreenStyles.CONTAINER} preset="scroll" backgroundColor={color.transparent} statusBar="dark-content">
      <Header
          headerTx="mapScreen.title"
          leftIcon="back"
          onLeftPress={goToWelcome}
          style={MapScreenStyles.HEADER}
          titleStyle={MapScreenStyles.HEADER_TITLE}
        />
        <MapView
          customMapStyle={customMapStyles}
          style={MapScreenStyles.MAP_VIEW}
          // onRegionChange={(e) => {
          //   console.log('WWWWWW', e)
          // }}
          zoomEnabled={true}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
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
        <View style={MapScreenStyles.PANEL_WRAPPER}>
          <Cube />
        </View>
        <Button
          tx={"mapScreen.roll_the_dice"}
          onPress={() => {
            removePlace(example)
          }}
        />
      </Screen>
    </View>
  )
})
