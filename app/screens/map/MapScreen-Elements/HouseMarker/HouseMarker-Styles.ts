/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color } from "../../../../theme"
import { screenWidth } from "../../../../utils/screen"

const STAND_INFO_BOX_SIZE = screenWidth / 3

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
    bottom: 10,
    height: 104,
    position: "absolute",
    width: 3,
  },
  STAND: {
    backgroundColor: color.palette.white,
    borderColor: color.palette.gold,
    borderRadius: STAND_INFO_BOX_SIZE / 2,
    borderWidth: 3,
    height: STAND_INFO_BOX_SIZE,
    position: "absolute",
    top: -STAND_INFO_BOX_SIZE + 8,
    width: STAND_INFO_BOX_SIZE,
  },
})
