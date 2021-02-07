/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react"
import Animated from "react-native-reanimated"
import { BlurView } from "@react-native-community/blur"
import { AnimatedMessageStyles } from "./AnimatedMessage-Styles"
import { TEXT_SEPARATOR, useAnimatedMessage } from "./AnimatedMessage-VM"
import { observer } from "mobx-react-lite"
import { Text } from "../../../../components"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import SwipeButton from 'rn-swipe-button'
import { View } from "react-native"
import { screenWidth } from "../../../../utils/screen"
import { color } from "../../../../theme"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

const ButtonIcon = () => <FontAwesome5Icon
  name="arrow-right"
  style={{ fontSize: 18 }}
/>

export const AnimatedMessage: FC = observer(() => {
  const vm = useAnimatedMessage()
  const {
    data: { animationStyles, message },
    methods: { hideMessage },
  } = vm

  return (
    <Animated.View style={[AnimatedMessageStyles.CONTAINER, animationStyles.styleMessageShow]}>
      <BlurView
        style={AnimatedMessageStyles.BLUR_VIEW}
        blurType="light"
        blurAmount={20}
        reducedTransparencyFallbackColor="white"
      >
        <MaterialCommunityIcons name="check-decagram" style={AnimatedMessageStyles.ICON} />
        <Text style={AnimatedMessageStyles.MESSAGE_TITLE}>
          {message?.title
            ? message?.title
                .split(TEXT_SEPARATOR.TITLE.TO_STYLED_TEXT)
                .map((titlePartOfText, key) => (
                <Text key={key} style={AnimatedMessageStyles.MESSAGE_TITLE}>
                  {titlePartOfText}
                </Text>
                ))
            : ""}
        </Text>
        <Text style={AnimatedMessageStyles.MESSAGE_DESCRIPTION}>
          {message?.description
            ? message?.description
                .split(TEXT_SEPARATOR.DESCRIPTION.TO_STYLED_TEXT)
                .map((descriptionPartOfText, key) => (
                <Text key={key} style={AnimatedMessageStyles.MESSAGE_DESCRIPTION}>
                  {descriptionPartOfText}
                </Text>
                ))
            : ""}
        </Text>
        <View style={AnimatedMessageStyles.CARD_BUTTON}>
          <SwipeButton
            width={screenWidth - 32}
            height={48}
            thumbIconBackgroundColor={color.palette.white}
            thumbIconBorderColor={color.palette.black}
            railBorderColor={color.transparent}
            titleStyles={AnimatedMessageStyles.CARD_BUTTON_TEXT}
            thumbIconStyles={AnimatedMessageStyles.BUTTON_ICON_BORDER}
            railBackgroundColor={color.palette.gold}
            railFillBackgroundColor={color.palette.black}
            railFillBorderColor={color.palette.black}
            title={message?.buttonText}
            thumbIconComponent={ButtonIcon as any}
            onSwipeSuccess={hideMessage}
          />
        </View>
      </BlurView>
    </Animated.View>
  )
})
