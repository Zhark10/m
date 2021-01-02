import React from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header, Screen } from "../../components"
import { color } from "../../theme"
import MapView from "react-native-maps"
import { MapScreenStyles } from "./MapScreen-Styles"
import { Cube } from "./MapScreen-Animations/Cube"

export const DemoScreen = observer(function DemoScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  return (
    <View testID="DemoScreen" style={MapScreenStyles.FULL}>
      <Screen style={MapScreenStyles.CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="mapScreen.title"
          leftIcon="back"
          onLeftPress={goBack}
          style={MapScreenStyles.HEADER}
          titleStyle={MapScreenStyles.HEADER_TITLE}
        />
        <MapView
          style={MapScreenStyles.MAP_VIEW}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={MapScreenStyles.PANEL_WRAPPER}>
          {/* <Text tx="mapScreen.roll_the_dice" style={MapScreenStyles.PANEL_TITLE} /> */}
          <Cube />
        </View>
      </Screen>
    </View>
  )
})
