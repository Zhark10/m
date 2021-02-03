import React, { FC } from "react"
import Animated from "react-native-reanimated"
import { BlurView } from "@react-native-community/blur"
import { AnimatedMessageStyles } from "./AnimatedMessage-Styles"
import { TEXT_SEPARATOR, useAnimatedMessage } from "./AnimatedMessage-VM"
import { observer } from "mobx-react-lite"
import { Button, Text } from "../../../../components"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

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
        <Button style={AnimatedMessageStyles.CARD_BUTTON} onPress={hideMessage}>
          <Text style={AnimatedMessageStyles.CARD_BUTTON_TEXT}>{message?.buttonText}</Text>
        </Button>
      </BlurView>
    </Animated.View>
  )
})
