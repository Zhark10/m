/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { spacing, typography } from "../../../../../../theme"
import { color } from "../../../../../../theme/color"
import { screenHeight, screenWidth } from "../../../../../../utils/screen"

export const StepCardStyles = StyleSheet.create({
  CONTAINER: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: color.palette.gold,
    borderRadius: 4,
    justifyContent: 'flex-start',
    maxHeight: screenHeight / 4,
    width: (screenWidth / 2),
  },
  DICE_CONTAINER: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: spacing[2],
  },
  HELP_ICON: {
    color: color.palette.white,
    fontFamily: typography.primary.book,
    fontSize: 24,
    paddingBottom: 5,
  },
  TITLE: {
    color: color.palette.white,
    fontFamily: typography.primary.book,
    fontSize: 20,
    lineHeight: 32,
  },
  TITLE_BOX: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingTop: 6,
    width: '100%',
  }
})
