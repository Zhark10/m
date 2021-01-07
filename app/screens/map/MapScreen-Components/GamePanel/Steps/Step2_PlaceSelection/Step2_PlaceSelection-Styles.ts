/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../../../../../theme"
import { screenHeight } from "../../../../../../utils/screen"

export const COONTAINER_HEIGHT = screenHeight / 3 - 128

export const Step2Styles = StyleSheet.create({
  BOX: {
    borderRadius: 8,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  CONTAINER: {
    alignItems: 'center',
    flex: 1,
    height: COONTAINER_HEIGHT,
    justifyContent: 'center',
    marginVertical: spacing[3],
  },
  PLACE_TITLE: {
    color: color.palette.white,
    fontFamily: typography.primary.book,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 32,
    padding: spacing[2],
  },

})
