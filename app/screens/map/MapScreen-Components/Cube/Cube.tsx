import React from "react"
import { View, StyleSheet } from "react-native"
import { color } from "../../../../theme/color"
import { screenWidth } from "../../../../utils/screen"
import { PanGestureHandler } from 'react-native-gesture-handler'

import ZBox from "./ZBox"
import ZSvg from "./ZSvg"
import Animated, { useSharedValue, useAnimatedGestureHandler, withSpring, useAnimatedStyle, withTiming } from "react-native-reanimated"

export const cubeSize = screenWidth / 5

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 2 * cubeSize,
    justifyContent: "center",
    width: cubeSize,
  },
})

const canvas = {
  x: cubeSize,
  y: cubeSize,
  z: cubeSize,
}

export const Cube = () => {
  const xOffset = useSharedValue(0)
  const yOffset = useSharedValue(0)
  const scale = useSharedValue(1)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = xOffset.value
      ctx.startY = yOffset.value
      ctx.scale = scale.value
    },
    onActive: (event, ctx) => {
      xOffset.value = ctx.startX + event.translationX
      yOffset.value = ctx.startY + event.translationY
      scale.value = withSpring(1.5)
    },
    onEnd: (event, ctx) => {
      xOffset.value = withSpring(ctx.startX + event.translationX)
      yOffset.value = withSpring(ctx.startY + event.translationY)
      scale.value = withSpring(1)
    },
  })

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
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <ZSvg canvas={canvas}>
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
    </PanGestureHandler>
  )
}
