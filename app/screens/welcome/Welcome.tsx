import React from "react"
import { View, Image, SafeAreaView, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text } from "../../components"
import { color } from "../../theme"
import Icon from 'react-native-vector-icons/FontAwesome'
import { WelcomeStyles } from "./Welcome-Styles"
import { EIconType, useWelcome } from "./Welcome-VM"
import Animated from 'react-native-reanimated/src/Animated'

Icon.loadFont()
const logo = require("./logo.png")

export const WelcomeScreen = observer(function WelcomeScreen() {
  const vm = useWelcome()
  const { data: { providers, guest, animationStyles }, methods: { goToMap } } = vm

  const getRoundButtonIcon = (provider: {
    name: string
    onPress: () => void
    iconType: EIconType
    animationStyle: any
  }) =>
    (
      <Animated.View key={provider.name} style={provider.animationStyle}>
        <TouchableOpacity onPress={provider.onPress}>
          <View style={WelcomeStyles.PROVIDER_ICON_WITH_LINE}>
            {provider.iconType === EIconType.LEFT && <View style={WelcomeStyles.PROVIDER_LINE} />}
            <View style={WelcomeStyles.PROVIDER_ICON_BUTTON}>
              <Icon
                name={provider.name}
                color={color.palette.black}
                style={WelcomeStyles.PROVIDER_ICON}
              />
            </View>
            {provider.iconType === EIconType.RIGHT && <View style={WelcomeStyles.PROVIDER_LINE} />}
          </View>
        </TouchableOpacity>
      </Animated.View>
    )

  return (
    <View testID="WelcomeScreen" style={WelcomeStyles.FULL}>
      <Screen style={WelcomeStyles.CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header style={WelcomeStyles.HEADER} titleStyle={WelcomeStyles.HEADER_TITLE} />
        <Animated.View style={[WelcomeStyles.TITLE_WRAPPER, animationStyles.titleStyle]}>
          <Text style={WelcomeStyles.TITLE_FIRST_PART} tx="welcomeScreen.welcome_1" />
          <Text style={WelcomeStyles.TITLE_SECOND_PART} tx="welcomeScreen.welcome_2" />
        </Animated.View>

        <View style={WelcomeStyles.ICONS_WRAPPER}>
          <View style={WelcomeStyles.PROVIDER_ICON_WRAPPER}>
            {providers.map(getRoundButtonIcon)}
          </View>
          <Animated.View style={animationStyles.logoStyle}>
            <Image source={logo} style={WelcomeStyles.LOGO} />
          </Animated.View>
        </View>

        <View style={WelcomeStyles.CONTENT}>
          <Animated.View style={animationStyles.showQuestDescriptionStyle}>
            <Text tx="welcomeScreen.quest" style={WelcomeStyles.QUEST_DESCRIPTION} />
          </Animated.View>
          {getRoundButtonIcon(guest)}
        </View>
      </Screen>
      <SafeAreaView style={WelcomeStyles.FOOTER}>
        <Animated.View style={[WelcomeStyles.FOOTER_CONTENT, animationStyles.showFooterStyle]}>
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
        </Animated.View>
      </SafeAreaView>
    </View>
  )
})
