/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../theme"
import { screenWidth } from "../../utils/screen"

export const WelcomeScreenStyles = StyleSheet.create({
  ANIMATED: {
    backgroundColor: color.palette.black,
    height: 80,
    margin: 30,
    width: 100,
  },
  BUTTON: {
    backgroundColor: 'transparent',
    borderColor: color.palette.black,
    borderTopWidth: 0.5,
  },
  BUTTON_TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary.regular,
    fontSize: 16,
    letterSpacing: 2,
  },
  CONTAINER: {
    backgroundColor: color.transparent,
  },
  FOOTER: { marginBottom: 64 },
  FOOTER_CONTENT: {
    borderColor: color.palette.black,
    marginHorizontal: spacing[4],
    marginVertical: spacing[4],
  },
  FULL: {
    flex: 1,
  },
  HEADER: {
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0,
    paddingTop: spacing[3],
  },
  HEADER_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    fontSize: 12,
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: "center",
  },
  ICONS_WRAPPER: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing[7],
  },
  INPUT_VIA: {
    marginTop: spacing[5],
  },
  LOGO: {
    alignSelf: "center",
    height: screenWidth / 1.5,
    marginBottom: spacing[7],
    width: screenWidth / 1.5
  },
  PROVIDER_ICON: {
    color: color.palette.black,
    fontSize: 32,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  PROVIDER_ICON_BUTTON: {
    alignItems: 'center',
    backgroundColor: color.palette.gold,
    borderRadius: 100,
    height: screenWidth / 5.5,
    justifyContent: 'center',
    width: screenWidth / 5.5,
  },
  PROVIDER_ICON_WRAPPER: {
    alignItems: 'center',
    backgroundColor: color.palette.black,
    flexDirection: 'row',
    height: screenWidth / 5.5 + 36,
    justifyContent: 'space-evenly',
    marginBottom: spacing[7],
    marginTop: spacing[5],
    width: '100%',
  },
  QUEST_DESCRIPTION: {
    color: color.palette.black,
    fontSize: 24,
    letterSpacing: 2,
    padding: 8,
  },
  TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary.regular,
  },
  TITLE_FIRST_PART: {
    color: color.palette.black,
    fontFamily: typography.primary.regular,
    fontSize: 25,
    lineHeight: 38,
  },
  TITLE_SECOND_PART: {
    color: color.palette.black,
    fontFamily: typography.primary.regular,
    fontSize: 52,
    left: 4,
    letterSpacing: 10,
  },
  TITLE_WRAPPER: {
    alignItems: 'center',
    backgroundColor: color.palette.gold,
    width: '100%',
  }
})
