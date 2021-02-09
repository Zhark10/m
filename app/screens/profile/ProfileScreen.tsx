import React from "react"
import { Image, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen } from "../../components"
import { color } from "../../theme"
import Icon from "react-native-vector-icons/FontAwesome"
import { ProfileScreenStyles } from "./ProfileScreen-Styles"
import { useProfile } from "./ProfileScreen-VM"
import { BlurView } from "@react-native-community/blur"

Icon.loadFont()
const map = require("../../../assets/brand/map.png")

export const ProfileScreen = observer(function ProfileScreen() {
  const vm = useProfile()
  const {
    data: { profile, footerOptions },
  } = vm
  return (
    <View testID="ProfileScreen" style={ProfileScreenStyles.FULL}>
      <Image source={map} style={ProfileScreenStyles.BLUR_VIEW} />
      <BlurView
        style={ProfileScreenStyles.BLUR_VIEW}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <Screen
        style={ProfileScreenStyles.CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}
        statusBar="dark-content"
      >
        <Header style={ProfileScreenStyles.HEADER} />

        <View style={ProfileScreenStyles.FOOTER_CONTENT}>
          {footerOptions.map((option) => (
            <Button
              key={option.buttonTitle}
              testID="next-screen-button"
              style={ProfileScreenStyles.BUTTON}
              textStyle={ProfileScreenStyles.BUTTON_TEXT}
              tx={option.buttonTitle}
              onPress={option.onPress}
            />
          ))}
        </View>
      </Screen>
    </View>
  )
})
