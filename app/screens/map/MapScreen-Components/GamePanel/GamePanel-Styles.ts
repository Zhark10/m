/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, typography } from "../../../../theme"
import { screenHeight, screenWidth } from "../../../../utils/screen"

export const GamePanelStyles = StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.palette.black,
    elevation: 24,
    height: screenHeight,
    shadowColor: color.palette.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    width: screenWidth,
  },
  GAME_SPACE: {
    backgroundColor: color.palette.black,
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
  }
})
