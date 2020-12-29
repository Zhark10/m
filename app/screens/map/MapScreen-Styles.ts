import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

export const MapScreenStyles = StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    flex: 1,
  },
  FULL: {
    flex: 1
  },
  HEADER: {
    paddingBottom: spacing[5] - 1,
    paddingHorizontal: spacing[4],
    paddingTop: spacing[3],
  },
  HEADER_TITLE: {
    color: color.palette.black,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: "center",
  },
  MAP_VIEW: {
    flex: 1,
  },
})
