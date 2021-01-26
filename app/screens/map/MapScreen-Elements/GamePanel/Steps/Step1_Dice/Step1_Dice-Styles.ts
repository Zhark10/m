import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../../../../../theme"
import { COONTAINER_HEIGHT } from "../Step2_PlaceSelection/Step2_PlaceSelection-Styles"

export const Step1Styles = StyleSheet.create({
  DICE_CONTAINER: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    height: COONTAINER_HEIGHT,
    justifyContent: "center",
  },
  INFO_CONTAINER: {
    marginVertical: spacing[3],
  },
  INFO_DESCRIPTION: {
    color: color.palette.black,
    fontFamily: typography.primary.book,
    fontSize: 16,
    textAlign: "center",
  },
  INFO_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    fontSize: 20,
    lineHeight: 32,
    paddingBottom: 4,
    textAlign: "center",
  },
})
