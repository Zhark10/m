/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { spacing, typography } from "../../../../../../theme"
import { color } from "../../../../../../theme/color"
import { screenHeight, screenWidth } from "../../../../../../utils/screen"

export const StepCardStyles = StyleSheet.create({
  CARD_BOX: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: spacing[2],
  },
  CONTAINER: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: color.palette.gold,
    borderRadius: 4,
    justifyContent: "flex-start",
    maxHeight: screenHeight / 4,
    width: screenWidth,
  },
  HELP_ICON: {
    color: color.palette.gold,
    fontFamily: typography.primary.book,
    fontSize: 24,
    paddingBottom: 5,
  },
  STEP_CARD_FLIP: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: spacing[2],
    width: screenWidth / 2,
  },
  TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    fontSize: 24,
    lineHeight: 32,
  },
  TITLE_BOX: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingTop: 6,
    width: "100%",
  },
})
