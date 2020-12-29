import React from "react"
import { View, Image, SafeAreaView, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text } from "../../components"
import { color } from "../../theme"
import Icon from 'react-native-vector-icons/FontAwesome'
import { WelcomeScreenStyles } from "./WelcomeScreen-Styles"
import { EIconType, useWelcome } from "./WelcomeScreen-VM"
import Animated from 'react-native-reanimated/src/Animated'

Icon.loadFont()
const logo = require("./logo.png")

export const WelcomeScreen = observer(function WelcomeScreen() {
  const vm = useWelcome()
  const { data: { providers, guest, animationStyles, footerOptions }, methods: { goToMap } } = vm

  const getRoundButtonIcon = (provider: {
    name: string
    onPress: () => void
    iconType: EIconType
    animationStyle: any
  }) =>
    (
      <Animated.View key={provider.name} style={provider.animationStyle}>
        <TouchableOpacity onPress={provider.onPress}>
          <View style={WelcomeScreenStyles.PROVIDER_ICON_WITH_LINE}>
            {provider.iconType === EIconType.LEFT && <View style={WelcomeScreenStyles.PROVIDER_LINE} />}
            <View style={WelcomeScreenStyles.PROVIDER_ICON_BUTTON}>
              <Icon
                name={provider.name}
                color={color.palette.black}
                style={WelcomeScreenStyles.PROVIDER_ICON}
              />
            </View>
            {provider.iconType === EIconType.RIGHT && <View style={WelcomeScreenStyles.PROVIDER_LINE} />}
          </View>
        </TouchableOpacity>
      </Animated.View>
    )

  return (
    <View testID="WelcomeScreen" style={WelcomeScreenStyles.FULL}>
      <Screen style={WelcomeScreenStyles.CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header style={WelcomeScreenStyles.HEADER} titleStyle={WelcomeScreenStyles.HEADER_TITLE} />
        <Animated.View style={[WelcomeScreenStyles.TITLE_WRAPPER, animationStyles.titleStyle]}>
          <Text style={WelcomeScreenStyles.TITLE_FIRST_PART} tx="welcomeScreen.welcome_1" />
          <Text style={WelcomeScreenStyles.TITLE_SECOND_PART} tx="welcomeScreen.welcome_2" />
        </Animated.View>

        <View style={WelcomeScreenStyles.ICONS_WRAPPER}>
          <View style={WelcomeScreenStyles.PROVIDER_ICON_WRAPPER}>
            {providers.map(getRoundButtonIcon)}
          </View>
          <Animated.View style={animationStyles.logoStyle}>
            <Image source={logo} style={WelcomeScreenStyles.LOGO} />
          </Animated.View>
        </View>

        <View style={WelcomeScreenStyles.CONTENT}>
          <Animated.View style={animationStyles.showQuestDescriptionStyle}>
            <Text tx="welcomeScreen.quest" style={WelcomeScreenStyles.QUEST_DESCRIPTION} />
          </Animated.View>
          {getRoundButtonIcon(guest)}
        </View>
      </Screen>
      <SafeAreaView style={WelcomeScreenStyles.FOOTER}>
        <Animated.View style={[WelcomeScreenStyles.FOOTER_CONTENT, animationStyles.showFooterStyle]}>
          {footerOptions.map(option =>
            <Button
              key={option.buttonTitle}
              testID="next-screen-button"
              style={WelcomeScreenStyles.BUTTON}
              textStyle={WelcomeScreenStyles.BUTTON_TEXT}
              tx={option.buttonTitle}
              onPress={option.onPress}
            />)}
        </Animated.View>
      </SafeAreaView>
    </View>
  )
})
