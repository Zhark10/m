/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../theme"
import { screenHeight, screenWidth } from "../../utils/screen"

export const ProfileScreenStyles = StyleSheet.create({
  AVA: {
    borderColor: color.palette.gold,
    borderRadius: screenWidth / 6,
    borderWidth: 5,
    height: screenWidth / 3,
    left: screenWidth / 20,
    width: screenWidth / 3,
  },
  BLUR_VIEW: {
    height: 11 / 12 * screenHeight,
    width: screenWidth,
    position: 'absolute',
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
    height: 1 / 12 * screenHeight,
    width: screenWidth,
    position: 'absolute',

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
