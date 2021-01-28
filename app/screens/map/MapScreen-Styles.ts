/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../theme"
import { screenHeight, screenWidth } from "../../utils/screen"

export const MapScreenStyles = StyleSheet.create({
  BUILDING: {
    alignItems: "center",
    borderRadius: 16,
    height: 32,
    justifyContent: "center",
    width: 32,
  },
  BUILDING_ICON: {
    // height: 32,
    // width: 32,
    fontSize: 32,
    left: 1,
  },
  CONTAINER: {
    backgroundColor: color.transparent,
    flex: 1,
  },
  FULL: {
    flex: 1,
  },
  HEADER: {
    paddingBottom: spacing[5] - 1,
    paddingHorizontal: spacing[4],
    paddingTop: spacing[3],
    zIndex: 999,
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
  MAP_VIEW_CONTAINER: {
    height: screenHeight,
    top: 0,
    zIndex: 9999,
  },
  ME_ICON: {
    color: color.palette.black,
    fontSize: 20,
  },
  ME_MARKER: {
    alignItems: "center",
    backgroundColor: color.palette.gold,
    borderRadius: 4,
    height: 36,
    justifyContent: "center",
    width: 36,
  },
  PANEL_TITLE: {
    backgroundColor: color.palette.gold,
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    fontSize: 26,
    letterSpacing: 2,
    padding: 12,
    textAlign: "center",
  },
  PANEL_WRAPPER: {
    alignItems: "center",
    backgroundColor: "transparent",
    bottom: 0,
    height: screenWidth / 3,
    position: "absolute",
    width: screenWidth / 3,
  },
  TRAPEZOID_1: {
    borderBottomColor: "transparent",
    borderBottomWidth: 12,
    borderLeftColor: color.palette.black,
    borderLeftWidth: 18,
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderTopWidth: 12,
    bottom: -10,
    height: screenHeight,
    left: 0,
    position: "absolute",
    width: 0,
  },
})
