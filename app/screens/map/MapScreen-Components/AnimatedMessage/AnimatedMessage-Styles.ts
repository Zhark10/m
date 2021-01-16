/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../../../theme"
import { screenHeight, screenWidth } from "../../../../utils/screen"

const CONTAINER_HEIGHT = 2 / 3 * screenHeight - 72

export const AnimatedMessageStyles = StyleSheet.create({
  BLUR_VIEW: {
    alignItems: 'center',
    height: CONTAINER_HEIGHT,
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    width: screenWidth,
  },
  CARD_BUTTON: {
    alignSelf: 'center',
    backgroundColor: color.palette.gold,
    height: 46,
    margin: spacing[5],
    width: '90%',
  },
  CARD_BUTTON_TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: 24,
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
    width: screenWidth,
    zIndex: 9999,
  },
  ICON: {
    color: color.palette.gold,
    fontSize: 72,
    padding: spacing[4],
  },
  MESSAGE_DESCRIPTION: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: 32,
    padding: spacing[4],
    textAlign: 'center',
  },
  MESSAGE_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    fontSize: 42,
    padding: spacing[3],
  },
})
