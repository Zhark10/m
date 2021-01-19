/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../theme"
import { screenHeight, screenWidth } from "../../utils/screen"

export const WelcomeScreenStyles = StyleSheet.create({
  ANIMATED: {
    backgroundColor: color.palette.black,
    height: 80,
    margin: 30,
    width: 100,
  },
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
  FOOTER: { marginBottom: 64 },
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
  ICONS_WRAPPER: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: spacing[2],
  },
  INPUT_VIA_TEXT: {
    backgroundColor: color.palette.black,
    color: color.palette.gold,
    fontFamily: typography.primary.book,
    fontSize: 32,
    lineHeight: 38,
    paddingVertical: 12,
    textAlign: "center",
    width: screenWidth,
  },
  LOGO: {
    alignSelf: "center",
    height: 0.9 * screenWidth,
    width: 0.9 * screenWidth,
  },
  PROVIDER_ICON: {
    color: color.palette.white,
    fontSize: 32,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  PROVIDER_ICON_BUTTON: {
    alignItems: "center",
    backgroundColor: color.palette.black,
    borderRadius: 100,
    height: screenWidth / 6,
    justifyContent: "center",
    width: screenWidth / 6,
  },
  PROVIDER_ICON_WRAPPER: {
    alignItems: "center",
    flexDirection: "row",
    height: screenWidth / 5.5 + 36,
    justifyContent: "space-evenly",
    marginVertical: spacing[2],
    width: 0.8 * screenWidth,
  },
  QUEST_DESCRIPTION: {
    color: color.palette.black,
    fontSize: 24,
    letterSpacing: 2,
    padding: 8,
  },
  REGISTRATION_BUTTON: {
    backgroundColor: color.palette.gold,
    height: 56,
    paddingTop: 12,
    width: 0.8 * screenWidth,
  },
  REGISTRATION_BUTTON_TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: 32,
  },
  TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary.regular,
  },
  TITLE_FIRST_PART: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: screenWidth / 10,
  },
  TITLE_SECOND_PART: {
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    fontSize: screenWidth / 4.5,
  },
  TITLE_WRAPPER: {
    alignItems: "center",
    // backgroundColor: color.palette.gold,
    // paddingTop: 12,
    width: "100%",
  },
})
