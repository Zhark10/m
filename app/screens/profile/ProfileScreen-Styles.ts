/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../theme"
import { screenHeight, screenWidth } from "../../utils/screen"

export const ProfileScreenStyles = StyleSheet.create({
  AVA: {
    backgroundColor: color.palette.white,
    borderColor: color.palette.gold,
    borderRadius: screenWidth / 6,
    borderWidth: 5,
    height: screenWidth / 3,
    left: screenWidth / 20,
    top: screenWidth / 6,
    width: screenWidth / 3,
    zIndex: 100,
  },
  AVA_CONTAINER: {

  },
  BLUR_VIEW: {
    height: 5 / 6 * screenHeight,
    position: 'absolute',
    top: 1 / 6 * screenHeight,
    width: screenWidth,
    zIndex: 99,
  },
  BUTTON: {
    backgroundColor: "transparent",
  },
  BUTTON_TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: 32,
    letterSpacing: 2,
    lineHeight: 38,
  },
  CONTAINER: {
    backgroundColor: color.transparent,
  },
  CONTENT: {

  },
  FOOTER_CONTENT: {
    borderColor: color.palette.black,
    marginBottom: spacing[8],
    marginHorizontal: spacing[4],
  },
  FULL: {
    flex: 1,
  },
  HEAD: {
    backgroundColor: color.palette.black,
    height: 1 / 6 * screenHeight,
    position: 'absolute',
    top: 0,
    width: screenWidth,
    zIndex: 98
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
