/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../theme"
import { screenWidth } from "../../utils/screen"

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
  PANEL_TITLE: {
    backgroundColor: color.palette.gold,
    color: color.palette.black,
    fontFamily: typography.primary.bold,
    fontSize: 26,
    letterSpacing: 2,
    padding: 12,
    textAlign: 'center',
  },
  PANEL_WRAPPER: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    bottom: 0,
    height: screenWidth / 3,
    position: 'absolute',
    width: screenWidth / 3,
  }
})
