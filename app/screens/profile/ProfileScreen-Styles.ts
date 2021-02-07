/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color } from "../../theme"
import { screenHeight, screenWidth } from "../../utils/screen"

export const ProfileScreenStyles = StyleSheet.create({
  BLUR_VIEW: {
    height: screenHeight,
    position: "absolute",
    width: screenWidth,
  },
  CONTAINER: {
    backgroundColor: color.transparent,
  },
  FULL: {
    flex: 1,
  },
  HEADER: {
    height: 0,
  },
  LOGO: {
    alignSelf: "center",
    height: 0.9 * screenWidth,
    width: 0.9 * screenWidth,
  },
})
