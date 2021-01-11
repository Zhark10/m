/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../../../theme"
import { screenHeight, screenWidth } from "../../../../utils/screen"

const CONTAINER_HEIGHT = 42

export const CustomOptionsStyles = StyleSheet.create({
  BLUR_VIEW: {
    alignItems: 'center',
    flexDirection: 'row',
    height: CONTAINER_HEIGHT,
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 0,
    width: screenWidth,
  },
  CARD_SEPARATOR: {
    alignSelf: 'center',
    backgroundColor: "rgba(0,0,0,0.5)",
    height: '100%',
    width: 1
  },
  CHECKBOX_ICON: {
    color: color.palette.gold,
    fontSize: 20,
    paddingRight: spacing[2],
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
    top: 0,
    width: screenWidth,
    zIndex: 9999,
  },
  HEADER: {
    height: 0,
  },
  OPTION: {
    alignItems: 'center',
    flexDirection: 'row',
    height: CONTAINER_HEIGHT,
    justifyContent: 'flex-start',
    margin: 3,
    padding: spacing[2],
    width: screenWidth / 3,
  },
  OPTION_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: 16,
    letterSpacing: 1.5,
    lineHeight: 15,
    paddingTop: 4,
  },
})
