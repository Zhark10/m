import React from "react"
import { View, StyleSheet } from "react-native"
import { color } from "../../../../theme/color"
import { screenWidth } from "../../../../utils/screen"
import { PanGestureHandler } from 'react-native-gesture-handler'

import ZBox from "./ZBox"
import ZSvg from "./ZSvg"
import Animated, { useSharedValue, useAnimatedGestureHandler, withSpring, useAnimatedStyle } from "react-native-reanimated"

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
  const x = useSharedValue(0)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = x.value
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX
    },
    onEnd: (_) => {
      x.value = withSpring(0)
    },
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
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
