import React from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen } from "../../components"
import { color } from "../../theme"
import { Api } from "../../services/api"
import { save } from "../../utils/storage"
import MapView from "react-native-maps"
import { MapScreenStyles } from "./MapScreen-Styles"
import { WelcomeScreenStyles } from "../welcome/WelcomeScreen-Styles"

export const DemoScreen = observer(function DemoScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const demoReactotron = React.useMemo(
    () => async () => {
      console.tron.log("Your Friendly tron log message")
      console.tron.logImportant("I am important")
      console.tron.display({
        name: "DISPLAY",
        value: {
          numbers: 1,
          strings: "strings",
          booleans: true,
          arrays: [1, 2, 3],
          objects: {
            deeper: {
              deeper: {
                yay: "👾",
              },
            },
          },
          functionNames: function hello() {
            /* dummy function */
          },
        },
        preview: "More control with display()",
        important: true,
        image: {
          uri:
            "https://avatars2.githubusercontent.com/u/3902527?s=200&u=a0d16b13ed719f35d95ca0f4440f5d07c32c349a&v=4",
        },
      })
      // make an API call for the demo
      // Don't do API like this, use store's API
      const demo = new Api()
      demo.setup()
      demo.getUser("1")
      // Let's do some async storage stuff
      await save("Cool Name", "Boaty McBoatface")
    },
    [],
  )

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
        <Button
              testID="next-screen-button"
              style={WelcomeScreenStyles.BUTTON}
              textStyle={WelcomeScreenStyles.BUTTON_TEXT}
              tx={'mapScreen.title'}
              onPress={demoReactotron}
            />
      </Screen>
    </View>
  )
})
