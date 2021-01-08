import React from "react"
import { View, StyleSheet } from "react-native"
import { color } from "../../../../theme/color"
import { screenWidth } from "../../../../utils/screen"

import ZBox from "./ZBox"
import ZSvg from "./ZSvg"

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
  return (
    <View style={styles.container}>
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
    </View>
  )
}
