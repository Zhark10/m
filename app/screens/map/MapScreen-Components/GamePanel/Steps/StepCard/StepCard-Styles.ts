import { StyleSheet } from "react-native"
import { spacing, typography } from "../../../../../../theme"
import { color } from "../../../../../../theme/color"
import { screenHeight, screenWidth } from "../../../../../../utils/screen"

const cardOffset = 8

export const StepCardStyles = StyleSheet.create({
  CONTAINER: {
    alignItems: 'center',
    backgroundColor: color.palette.white,
    borderColor: color.palette.gold,
    borderRadius: 4,
    justifyContent: 'flex-start',
    marginLeft: cardOffset,
    marginTop: cardOffset,
    maxHeight: screenHeight / 4,
    width: (screenWidth / 2) - 1.5 * cardOffset,
  },
  DICE_CONTAINER: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[2],
  },
  HELP_ICON: {
    color: color.palette.gold,
    fontFamily: typography.primary.book,
    fontSize: 32,
    paddingBottom: 5,
  },
  TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: 22,
    lineHeight: 32,
  },
  TITLE_BOX: {
    alignItems: 'center',
    backgroundColor: color.palette.white,
    borderBottomWidth: 4,
    borderColor: color.palette.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: 6,
    width: '100%',
  }
})
