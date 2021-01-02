import React from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header, Screen } from "../../components"
import { color } from "../../theme"
import MapView, { Marker } from "react-native-maps"
import { MapScreenStyles } from "./MapScreen-Styles"
import { Cube } from "./MapScreen-Animations/Cube"
import { customMapStyles } from "../welcome/WelcomeScreen-CustomMapStyles"
import { useStores } from "../../models"

const LATITUDE = 56.62830507073426
const LONGITUDE = 47.89521717849814
const LATITUDE_DELTA = 0.03607053635663959
const LONGITUDE_DELTA = 0.03553391019821106

export const DemoScreen = observer(function DemoScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const { cityPlace } = useStores()

  return (
    <View testID="DemoScreen" style={MapScreenStyles.FULL}>
      <Screen style={MapScreenStyles.CONTAINER} preset="scroll" backgroundColor={color.transparent} statusBar="dark-content">
        <Header
          headerTx="mapScreen.title"
          leftIcon="back"
          onLeftPress={goBack}
          style={MapScreenStyles.HEADER}
          titleStyle={MapScreenStyles.HEADER_TITLE}
        />
        <MapView
          customMapStyle={customMapStyles}
          style={MapScreenStyles.MAP_VIEW}
          onRegionChange={(e) => {
            console.log('WWWWWW', e)
          }}
          zoomEnabled={true}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            title="This is a title"
            description="This is a description"
            coordinate={cityPlace.coordinates}
          />
        </MapView>
        <View style={MapScreenStyles.PANEL_WRAPPER}>
          <Cube />
        </View>
      </Screen>
    </View>
  )
})
