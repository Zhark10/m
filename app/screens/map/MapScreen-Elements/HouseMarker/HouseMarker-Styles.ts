/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color } from "../../../../theme"
import { screenHeight, screenWidth } from "../../../../utils/screen"

export const HouseMarkerStyles = StyleSheet.create({
  CIRCLE: {
    backgroundColor: color.palette.black,
    borderRadius: 12,
    height: 24,
    width: 24,
  },
  MARKER_CONTAINER: {
    alignItems: "center",
    bottom: 36,
    height: 112,
    justifyContent: "flex-end",
    width: 24,
  },
  PILLAR: {
    backgroundColor: color.palette.gold,
    borderRadius: 4,
    bottom: 8,
    height: 104,
    position: "absolute",
    width: 8,
  },
})
