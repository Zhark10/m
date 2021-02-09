/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../theme"
import { screenHeight, screenWidth } from "../../utils/screen"

export const ProfileScreenStyles = StyleSheet.create({
  BLUR_VIEW: {
    height: screenHeight,
    position: "absolute",
    width: screenWidth,
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
  FOOTER_CONTENT: {
    borderColor: color.palette.black,
    marginBottom: spacing[8],
    marginHorizontal: spacing[4],
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
