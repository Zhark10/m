import React from "react"
import { View, StyleSheet } from "react-native"
import { color } from "../../../../theme/color"
import { screenWidth } from "../../../../utils/screen"

import ZBox from "./ZBox"
import ZSvg from "./ZSvg"

const cubeSize = screenWidth / 3

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

export const Cube = () => {
  return (
    <View style={styles.container}>
      <ZSvg canvas={canvas}>
        <ZBox
          width={0.8}
          height={0.8}
          depth={0.8}
          front={color.palette.gold}
          back={color.palette.gold}
          left={color.palette.gold}
          right={color.palette.gold}
          top={color.palette.gold}
          bottom={color.palette.gold}
        />
      </ZSvg>
    </View>
  )
}
