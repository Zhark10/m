import React, { FC } from "react"
import Animated from "react-native-reanimated"
import { BlurView } from "@react-native-community/blur"
import { AnimatedMessageStyles } from "./AnimatedMessage-Styles"
import { useAnimatedMessage } from "./AnimatedMessage-VM"
import { observer } from "mobx-react-lite"

export type TAnimatedMessageProps = {

}

export const AnimatedMessage: FC<TAnimatedMessageProps> = observer(() => {
  const vm = useAnimatedMessage()
  const { data: { animationStyles }, methods: { hideMessage } } = vm

  return (
    <Animated.View style={AnimatedMessageStyles.CONTAINER}>
      <BlurView
        style={AnimatedMessageStyles.BLUR_VIEW}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      >
        
      </BlurView>
    </Animated.View>
  )
})
