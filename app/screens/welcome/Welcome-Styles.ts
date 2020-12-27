import { StyleSheet } from "react-native"
import { color, spacing, typography } from "../../theme"
import { screenWidth } from "../../utils/screen"

export const WelcomeStyles = StyleSheet.create({
  BOLD: {
    fontWeight: "bold",
  },
  BUTTON: {
    backgroundColor: color.palette.white,
    borderColor: color.palette.black,
    borderRadius: 8,
    borderWidth: 2,
    marginVertical: spacing[1],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  BUTTON_TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary,
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
  },
  CONTENT: {
    alignSelf: 'center',
    color: color.palette.black,
    fontFamily: typography.primary,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
    marginBottom: spacing[5],
  },
  COUNT: {
    color: color.palette.black,
    fontSize: 24,
    fontWeight: '700',
    padding: 8,
  },
  FOOTER: { marginBottom: 64 },
  FOOTER_CONTENT: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  FULL: { flex: 1 },
  HEADER: {
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0,
    paddingTop: spacing[3],
  },
  HEADER_TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: "center",
  },
  ICONS_WRAPPER: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing[7],
    right: screenWidth / 9,
  },
  LOGO: {
    alignSelf: "center",
    borderColor: color.palette.black,
    borderRadius: screenWidth / 1.8,
    borderWidth: 4,
    height: screenWidth / 1.8,
    left: screenWidth / 12,
    width: screenWidth / 1.8
  },
  PROVIDER_ICON: {
    fontSize: 32,
  },
  PROVIDER_ICON_BUTTON: {
    alignItems: 'center',
    borderColor: color.palette.black,
    borderRadius: 100,
    borderWidth: 4,
    height: screenWidth / 5.5,
    justifyContent: 'center',
    width: screenWidth / 5.5,
  },
  PROVIDER_ICON_WITH_LINE: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  PROVIDER_ICON_WRAPPER: {
    justifyContent: 'space-around',
    minHeight: screenWidth / 2 + 50,
  },
  PROVIDER_LINE: {
    backgroundColor: color.palette.black,
    height: 3,
    width: 50
  },
  TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary,
  },
  TITLE: {
    color: color.palette.black,
    fontFamily: typography.primary,
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 38,
    textAlign: "center",
  },
  TITLE_WRAPPER: {
    color: color.palette.black,
    fontFamily: typography.primary,
    textAlign: "center",
  }
})
