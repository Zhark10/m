import React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Header, Screen } from "../../components"
import { color } from "../../theme"
import Icon from "react-native-vector-icons/FontAwesome"
import { ProfileScreenStyles } from "./ProfileScreen-Styles"
import { useProfile } from "./ProfileScreen-VM"
import { BlurView } from "@react-native-community/blur"

Icon.loadFont()

export const ProfileScreen = observer(function ProfileScreen() {
  const vm = useProfile()
  console.log(vm)

  return (
    <View testID="ProfileScreen" style={ProfileScreenStyles.FULL}>
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
      </Screen>
    </View>
  )
})
