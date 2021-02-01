/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, typography } from "../../../../theme"
import { screenWidth } from "../../../../utils/screen"

const CONTAINER_HEIGHT = 56

export const CustomOptionsStyles = StyleSheet.create({
  BLUR_VIEW: {
    alignItems: "flex-end",
    flexDirection: "row",
    height: CONTAINER_HEIGHT,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: screenWidth,
  },
  CARD_SEPARATOR: {
    alignSelf: "center",
    backgroundColor: color.palette.black,
    height: 1,
    top: -4,
    width: screenWidth / 4,
  },
  CHECKBOX_ICON: {
    color: color.palette.gold,
    fontSize: 24,
    top: -4,
  },
  CONTAINER: {
    elevation: 5,
    height: CONTAINER_HEIGHT,
    position: "absolute",
    width: screenWidth,
    zIndex: 9999,
  },
  HEADER: {
    height: 0,
  },
  OPTION: {
    alignItems: "center",
    flexDirection: "row",
    height: CONTAINER_HEIGHT / 2,
    justifyContent: "center",
  },
  OPTION_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    fontSize: 16,
    letterSpacing: 1.5,
    position: "absolute",
    textAlign: "center",
    top: -20,
    width: screenWidth / 4,
  },
})
