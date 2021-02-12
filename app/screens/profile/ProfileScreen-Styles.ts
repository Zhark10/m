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
    width: screenWidth / 3,
  },
  AVA_CONTAINER: {
    flexDirection: 'row',
    height: screenWidth / 3,
    justifyContent: 'space-between',
    top: screenWidth / 6,
    width: screenWidth,
    zIndex: 100
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
  COST: {
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    fontSize: screenWidth / 12,
    padding: 8,
    textAlign: 'right',
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
    alignItems: 'flex-end',
    backgroundColor: color.palette.black,
    height: 1 / 6 * screenHeight,
    justifyContent: 'flex-end',
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
  MAIN_TITLE_CONTAINER: {
    flex: 1,
  },
  USER_NAME: {
    color: color.palette.gold,
    fontFamily: typography.primary.bold,
    fontSize: screenWidth / 12,
    paddingRight: 8,
  },
})
