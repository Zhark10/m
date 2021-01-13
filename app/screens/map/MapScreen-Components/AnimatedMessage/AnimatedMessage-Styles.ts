/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { screenHeight, screenWidth } from "../../../../utils/screen"

const CONTAINER_HEIGHT = 2 / 3 * screenHeight

export const AnimatedMessageStyles = StyleSheet.create({
  BLUR_VIEW: {
    alignItems: 'center',
    flexDirection: 'row',
    height: CONTAINER_HEIGHT,
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 0,
    width: screenWidth,
  },
  CONTAINER: {
    elevation: 5,
    height: CONTAINER_HEIGHT,
    position: 'absolute',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    top: 0,
    width: screenWidth,
    zIndex: 9999,
  },
})
