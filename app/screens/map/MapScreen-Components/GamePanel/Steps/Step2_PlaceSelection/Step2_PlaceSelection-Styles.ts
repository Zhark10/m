/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../../../../../theme"
import { screenHeight, screenWidth } from "../../../../../../utils/screen"

export const COONTAINER_HEIGHT = screenHeight / 3 - 128
export const SLIDER_WIDTH = (1 / 2) * screenWidth + 24

export const Step2Styles = StyleSheet.create({
  BOX: {
    flex: 1,
    backgroundColor: color.palette.white,
    shadowColor: color.palette.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 12,
    padding: spacing[1],
    width: SLIDER_WIDTH,
  },
  CONTAINER: {
    alignItems: "center",
    flex: 1,
    height: COONTAINER_HEIGHT,
    width: screenWidth,
    justifyContent: "center",
  },
  COPYRIGHT: {
    fontSize: 12,
    fontFamily: typography.primary.book,
    color: color.palette.black,
    backgroundColor: color.palette.white,
    textAlign: "center",
  },
  ROLL_DICE_REPEAT_TEXT: {
    fontSize: 16,
    fontFamily: typography.primary.bold,
    color: color.palette.black,
    textAlign: "center",
  },
  CARD_CONTENT: {
    flex: 1,
    flexDirection: "row",
    width: screenWidth,
    justifyContent: "space-between",
  },
  CARD_CONTENT_LEFT_BOX: {
    justifyContent: "space-evenly",
    marginHorizontal: 12,
  },
  CARD_CONTENT_LEFT_BOX_ICON: {
    fontSize: screenWidth / 12,
    color: color.palette.gold,
  },
  INVISIBLE_BOX: {
    backgroundColor: color.transparent,
    height: (1 / 8) * screenWidth,
    padding: spacing[1],
  },
  CARD_CONTENT_LEFT_BOX_LOCATION_ICON_BUTTON: {
    backgroundColor: color.palette.opacity.gold32,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: color.palette.gold,
    height: (1 / 8) * screenWidth,
    width: (1 / 3) * screenWidth,
    position: "absolute",
    padding: spacing[1],
    paddingLeft: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  CARD_CONTENT_LEFT_BOX_ICON_BUTTON: {
    backgroundColor: color.palette.opacity.gold32,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: color.palette.gold,
    height: (1 / 8) * screenWidth,
    width: (1 / 4) * screenWidth,
    padding: spacing[1],
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  PLACE_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 24,
    lineHeight: 30,
    height: 46,
    padding: spacing[2],
  },
  PLACE_ITEM: {
    flexDirection: "row",
    paddingBottom: 1,
  },
  PLACE_ITEM_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    textAlign: "center",
    fontSize: 16,
    paddingRight: spacing[2],
  },
  PLACE_ITEM_INFO: {
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    textAlign: "center",
    fontSize: 16,
    paddingRight: spacing[2],
  },
  PLACE_CONTAINER: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  PLACE_BOX: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: spacing[1],
  },
  PLACE_COST: {
    color: color.palette.gold,
    fontFamily: typography.primary.bold,
    textAlign: "center",
    fontSize: screenWidth / 9,
    paddingHorizontal: spacing[2],
  },
  ICON: {
    fontSize: 32,
  },
  INFO_CONTAINER: {
    marginVertical: spacing[3],
  },
  INFO_DESCRIPTION: {
    color: color.palette.white,
    fontFamily: typography.primary.book,
    fontSize: 16,
    textAlign: "center",
  },
  INFO_TITLE: {
    color: color.palette.white,
    fontFamily: typography.primary.bold,
    fontSize: 20,
    lineHeight: 32,
    paddingBottom: 4,
    textAlign: "center",
  },
  CARD_BUTTON: {
    backgroundColor: color.palette.white,
    height: 32,
    width: "100%",
    borderRadius: 0,
  },
  CARD_BUTTON_TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: 18,
  },
  CARD_BUTTON_PLACE_TEXT: {
    color: color.palette.white,
    fontFamily: typography.primary.bold,
    fontSize: 18,
  },
})
