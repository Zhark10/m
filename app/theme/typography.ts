import { Platform } from "react-native"

export const typography = {
  primary: {
    regular: Platform.select({ ios: "BebasNeue-Regular", android: "BebasNeue-Regular" }),
    bold: Platform.select({ ios: "BebasNeue-Bold", android: "BebasNeue-Bold" }),
    light: Platform.select({ ios: "BebasNeue-Light", android: "BebasNeue-Light" }),
    book: Platform.select({ ios: "BebasNeue-Book", android: "BebasNeue-Book" }),
  },
}
