import React, { useEffect, useState } from "react"
import { View, Image, SafeAreaView, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text } from "../../components"
import { color } from "../../theme"
import Icon from 'react-native-vector-icons/FontAwesome'
import { WelcomeStyles } from "./Welcome-Styles"
import { useWelcome } from "./Welcome-VM"

Icon.loadFont()
const logo = require("./logo.png")

export const WelcomeScreen = observer(function WelcomeScreen() {
  const vm = useWelcome()
  const { data: { timeToPlay }, methods: { goToMap } } = vm

  return (
    <View testID="WelcomeScreen" style={WelcomeStyles.FULL}>
      <Screen style={WelcomeStyles.CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header style={WelcomeStyles.HEADER} titleStyle={WelcomeStyles.HEADER_TITLE} />
        <Text style={WelcomeStyles.TITLE_WRAPPER}>
          <Text style={WelcomeStyles.TITLE} tx="welcomeScreen.welcome_1" />
        </Text>
        <Text style={WelcomeStyles.TITLE} tx="welcomeScreen.welcome_2" />

        <View style={WelcomeStyles.ICONS_WRAPPER}>
          <View style={WelcomeStyles.PROVIDER_ICON_WRAPPER}>
            <TouchableOpacity onPress={goToMap}>
              <View style={WelcomeStyles.PROVIDER_ICON_WITH_LINE}>
                <View style={WelcomeStyles.PROVIDER_LINE} />
                <View style={WelcomeStyles.PROVIDER_ICON_BUTTON}>
                  <Icon
                    name="facebook"
                    color={color.palette.black}
                    style={WelcomeStyles.PROVIDER_ICON}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToMap}>
              <View style={WelcomeStyles.PROVIDER_ICON_WITH_LINE}>
                <View style={WelcomeStyles.PROVIDER_LINE} />
                <View style={WelcomeStyles.PROVIDER_ICON_BUTTON}>
                  <Icon
                    name="google"
                    color={color.palette.black}
                    style={WelcomeStyles.PROVIDER_ICON}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToMap}>
              <View style={WelcomeStyles.PROVIDER_ICON_WITH_LINE}>
                <View style={WelcomeStyles.PROVIDER_LINE} />
                <View style={WelcomeStyles.PROVIDER_ICON_BUTTON}>
                  <Icon
                    name="vk"
                    color={color.palette.black}
                    style={WelcomeStyles.PROVIDER_ICON}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <Image source={logo} style={WelcomeStyles.LOGO} />
        </View>

        <Text style={WelcomeStyles.CONTENT}>
          Игра начнется через <Text style={WelcomeStyles.COUNT}>{timeToPlay}</Text>...
        </Text>
      </Screen>
      <SafeAreaView style={WelcomeStyles.FOOTER}>
        <View style={WelcomeStyles.FOOTER_CONTENT}>
          <Button
            testID="next-screen-button"
            style={WelcomeStyles.BUTTON}
            textStyle={WelcomeStyles.BUTTON_TEXT}
            tx="welcomeScreen.instruction"
            onPress={goToMap}
          />
          <Button
            testID="next-screen-button"
            style={WelcomeStyles.BUTTON}
            textStyle={WelcomeStyles.BUTTON_TEXT}
            tx="welcomeScreen.continue"
            onPress={goToMap}
          />
        </View>
      </SafeAreaView>
    </View>
  )
})
