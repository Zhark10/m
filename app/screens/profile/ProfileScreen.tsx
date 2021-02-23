/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-return-assign */
import React from "react"
import { Image, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Screen, Text } from "../../components"
import { color } from "../../theme"
import Icon from "react-native-vector-icons/FontAwesome"
import { ProfileScreenStyles } from "./ProfileScreen-Styles"
import { useProfile } from "./ProfileScreen-VM"
import { BlurView } from "@react-native-community/blur"
import { nodeFromRef, SharedElement } from "react-native-shared-element"

Icon.loadFont()
const ava = require("../../../assets/brand/logo_2.png")
const map = require("../../../assets/brand/map.png")

export const ProfileScreen = observer(function ProfileScreen() {
  const vm = useProfile()
  const {
    data: { profile, footerOptions },
  } = vm

  let endAncestor: any
  let endNode: any
  return (
    <View testID="ProfileScreen" style={ProfileScreenStyles.FULL}>
      <View style={ProfileScreenStyles.HEAD}>
        <Text style={ProfileScreenStyles.USER_NAME}>{profile.firstName || "Zharavin"}</Text>
        <Text style={ProfileScreenStyles.USER_NAME}>{profile.secondName || "Arkady"}</Text>
      </View>
      <Image source={map} style={ProfileScreenStyles.BLUR_VIEW} />
      <BlurView
        style={ProfileScreenStyles.BLUR_VIEW}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      >
        <Text style={ProfileScreenStyles.COST}>{(profile.meMoney || 27000) + " $"}</Text>
      </BlurView>
      <View ref={ref => endAncestor = nodeFromRef(ref)} style={ProfileScreenStyles.AVA_CONTAINER}>
        <SharedElement onNode={node => endNode = node}>
          <Image style={ProfileScreenStyles.AVA} source={ava} />
        </SharedElement>
      </View>
      <Screen preset="scroll" backgroundColor={color.transparent} statusBar="dark-content">
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
