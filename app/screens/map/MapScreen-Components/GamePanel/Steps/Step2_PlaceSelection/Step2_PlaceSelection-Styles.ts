/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../../../../../theme"
import { screenHeight } from "../../../../../../utils/screen"

export const COONTAINER_HEIGHT = screenHeight / 3 - 128

export const Step2Styles = StyleSheet.create({
  BOX: {
    flex: 1,
    backgroundColor: color.palette.white,
    borderWidth: 1,
  },
  CONTAINER: {
    alignItems: 'center',
    flex: 1,
    height: COONTAINER_HEIGHT,
    justifyContent: 'center',
    marginVertical: spacing[3],
  },
  PLACE_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 32,
    padding: spacing[2],
  },
  PLACE_ITEM: {
    flexDirection: 'row',
  },
  PLACE_ITEM_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    textAlign: 'center',
    fontSize: 16,
    padding: spacing[2],
  },
  PLACE_ITEM_INFO: {
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    textAlign: 'center',
    fontSize: 16,
    padding: spacing[2],
  },
  PLACE_COST: {
    color: color.palette.gold,
    fontFamily: typography.primary.bold,
    textAlign: 'center',
    fontSize: 36,
    padding: spacing[2],
  },
  ICON: {
    fontSize: 32,
  },
  INFO_CONTAINER: {
    marginVertical: spacing[3],
  },
  INFO_DESCRIPTION: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: 16,
    textAlign: 'center',
  },
  INFO_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    fontSize: 20,
    lineHeight: 32,
    paddingBottom: 4,
    textAlign: 'center',
  },
  REGISTRATION_BUTTON: {
    backgroundColor: color.palette.gold,
    height: 32,
    paddingTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  REGISTRATION_BUTTON_TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: 16,
  },
})
