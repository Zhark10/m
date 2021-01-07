/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, typography } from "../../../../theme"
import { screenHeight, screenWidth } from "../../../../utils/screen"

export const GamePanelStyles = StyleSheet.create({
  BLUR_VIEW: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
  },
  CARD_SEPARATOR: {
    alignSelf: 'center',
    backgroundColor: "rgba(0,0,0,0.5)",
    height: '100%',
    width: 1
  },
  CONTAINER: {
    elevation: 24,
    height: screenHeight,
    position: 'absolute',
    shadowColor: color.palette.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    width: screenWidth,
    zIndex: 9999,
  },
  GAME_SPACE: {
    backgroundColor: 'transparent',
    borderColor: color.palette.gold,
    borderRadius: 12,
    flexDirection: 'row',
    height: (screenHeight / 3) - 42,
    width: screenWidth * 5,
  },
  INITIAL_MESSAGE: {
    color: color.palette.white,
    fontFamily: typography.primary.bold,
    fontSize: screenWidth / 15,
    lineHeight: 36,
    paddingTop: 18,
  },
  INITIAL_MESSAGE_BOX: {
    alignItems: 'flex-start',
    backgroundColor: color.palette.black,
    borderColor: color.palette.white,
    flexDirection: 'row',
    height: screenWidth,
    justifyContent: 'center',
    position: "absolute",
    width: screenWidth,
    zIndex: 999,
  },
  TRAPEZOID: {
    borderBottomColor: color.palette.black,
    borderBottomWidth: 12,
    borderLeftColor: color.palette.white,
    borderLeftWidth: 20,
    // borderRightColor: color.palette.white,
    // borderRightWidth: 20,
    borderStyle: "solid",
    height: 0,
    width: screenWidth,
  },
  TRAPEZOID_LEFT: {
    borderBottomColor: "transparent",
    borderBottomWidth: 12,
    borderLeftColor: color.palette.black,
    borderLeftWidth: 18,
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderTopWidth: 12,
    bottom: screenHeight - 10,
    height: screenHeight,
    left: 0,
    position: 'absolute',
    width: 0,
    zIndex: 999,
  },
  TRAPEZOID_RIGHT: {
    borderBottomColor: "transparent",
    borderBottomWidth: 12,
    borderRightColor: color.palette.black,
    borderRightWidth: 18,
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderTopWidth: 12,
    bottom: screenHeight - 10,
    height: screenHeight,
    position: 'absolute',
    right: 0,
    width: 0,
    zIndex: 999,
  }
})
