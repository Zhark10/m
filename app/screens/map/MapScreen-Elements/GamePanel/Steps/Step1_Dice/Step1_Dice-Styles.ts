import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../../../../../theme"
import { screenWidth } from "../../../../../../utils/screen"
import { COONTAINER_HEIGHT } from "../Step2_PlaceSelection/Step2_PlaceSelection-Styles"

export const Step1Styles = StyleSheet.create({
  COPYRIGHT: {
    color: color.palette.white,
    fontFamily: typography.primary.bold,
    fontSize: 18,
    textAlign: "center",
  },
  COPYRIGHT_BOX: {
    backgroundColor: color.palette.gold,
    borderRadius: 4,
    bottom: -12,
    fontSize: 18,
    padding: 4,
    position: "absolute",
  },
  DICE_CONTAINER: {
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: "row",
    height: COONTAINER_HEIGHT,
    justifyContent: "center",
    width: screenWidth - 32,
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
  SIMULATED_TABLE: {
    backgroundColor: color.palette.white,
    borderLeftColor: color.palette.gold,
    borderLeftWidth: 2,
    borderRightColor: color.palette.gold,
    borderRightWidth: 2,
    borderTopColor: color.palette.gold,
    borderTopLeftRadius: 172,
    borderTopRightRadius: 172,
    borderTopWidth: 2,
    bottom: 2,
    flexDirection: "row",
    height: (2 / 3) * COONTAINER_HEIGHT,
    justifyContent: "center",
    position: "absolute",
    width: screenWidth - 42,
  },
})
