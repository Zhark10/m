import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { color } from "../../../../theme/color"
import { screenWidth } from "../../../../utils/screen"

import ZBox from "./ZBox"
import ZSvg from "./ZSvg"
import Animated, { useSharedValue, useAnimatedStyle } from "react-native-reanimated"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

export const END_SCALE_VALUE = 0.3
export const cubeSize = screenWidth / 5

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: cubeSize,
    justifyContent: "center",
    width: cubeSize,
  },
  diceBox: {
    alignItems: "center",
    height: cubeSize,
    justifyContent: "center",
    position: 'absolute',
    width: cubeSize,
  },
  diceLarge: {
    color: color.palette.black,
    fontSize: 46,
  },
  diceSmall: {
    color: color.palette.black,
    fontSize: 38,
  }
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

  const [diceResult, setDiceResult] = useState(0)

  const getDicePointIcon = (diceSize: 'small' | 'large') => {
    const dicePoints = {
      0: 'dice',
      1: 'dice-one',
      2: 'dice-two',
      3: 'dice-three',
      4: 'dice-four',
      5: 'dice-five',
      6: 'dice-six',
    }

    return <FontAwesome5Icon
      name={dicePoints[diceResult]}
      style={diceSize === "small" ? styles.diceSmall : styles.diceLarge}
    />
  }

  return (
    <View>
      <View style={styles.diceBox}>
        {getDicePointIcon("small")}
      </View>
      <ZSvg canvas={canvas} rollDiceParams={rollDiceParams} setDiceResult={setDiceResult}>
        <Animated.View style={[styles.container, animatedStyle]}>
          {diceResult ? getDicePointIcon("large")
            : <ZBox
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
          }
        </Animated.View>
      </ZSvg>
    </View>
  )
}
