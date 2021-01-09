import React from "react"
import { View, StyleSheet } from "react-native"
import { color } from "../../../../theme/color"
import { screenWidth } from "../../../../utils/screen"
import { PanGestureHandler } from 'react-native-gesture-handler'

import ZBox from "./ZBox"
import ZSvg from "./ZSvg"
import Animated, { useSharedValue, useAnimatedGestureHandler, withSpring, useAnimatedStyle, withTiming, concat } from "react-native-reanimated"

export const cubeSize = screenWidth / 5

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: cubeSize,
    justifyContent: "center",
    width: cubeSize,
  },
})

const canvas = {
  x: cubeSize,
  y: cubeSize,
  z: cubeSize,
}

export type TRollDiceParams = {
  xOffset: Animated.SharedValue<number>;
  yOffset: Animated.SharedValue<number>;
  scale: Animated.SharedValue<number>;
}

export const Cube = () => {
  const xOffset = useSharedValue(0)
  const yOffset = useSharedValue(0)
  const scale = useSharedValue(1)

  const rollDiceParams = {
    xOffset, yOffset, scale
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: xOffset.value,
        },
        {
          translateY: yOffset.value
        },
        {
          scale: scale.value
        }
      ],
    }
  })

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ZSvg canvas={canvas} rollDiceParams={rollDiceParams}>
        <ZBox
          width={1}
          height={1}
          depth={1}
          front={color.palette.black}
          back={color.palette.black}
          left={color.palette.black}
          right={color.palette.black}
          top={color.palette.black}
          bottom={color.palette.black}
        />
      </ZSvg>
    </Animated.View>
  )
}
