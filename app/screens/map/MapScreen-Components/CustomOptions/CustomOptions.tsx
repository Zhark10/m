import React, { FC, Fragment } from "react"
import { Header, Text } from "../../../../components"
import { View } from "react-native"
import { BlurView } from "@react-native-community/blur"
import { CustomOptionsStyles } from "./CustomOptions-Styles"
import Fontisto from 'react-native-vector-icons/Fontisto'
import { color } from "../../../../theme"

export type TCustomOptionsProps = {

}

export const CustomOptions: FC<TCustomOptionsProps> = (props) => {
  const OPTIONS = [
    {
      tx: "mapScreen.options.step_1_completed_text",
      complete: true
    },
    {
      tx: "mapScreen.options.step_2_completed_text",
      complete: false
    },
    {
      tx: "mapScreen.options.step_3_completed_text",
      complete: false
    },
  ]
  return (
    <View style={CustomOptionsStyles.CONTAINER}>
      <Header style={CustomOptionsStyles.HEADER} />
      <BlurView
        style={CustomOptionsStyles.BLUR_VIEW}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      >
        {
          OPTIONS.map(opt => {
            const optionData = opt.complete
              ? {
                  backgroundColor: color.palette.opacity.gold32,
                  icon: "checkbox-active",
                  color: color.palette.black
                }
              : {
                  backgroundColor: color.transparent,
                  icon: "checkbox-passive",
                  color: color.palette.black
                }
            return (
              <Fragment key={opt.tx}>
                <View key={opt.tx} style={[CustomOptionsStyles.OPTION, { backgroundColor: optionData.backgroundColor }]}>
                  <Fontisto name={optionData.icon} style={[CustomOptionsStyles.CHECKBOX_ICON, { color: optionData.color }]} />
                  <Text style={[CustomOptionsStyles.OPTION_TITLE, { color: optionData.color }]} tx={opt.tx} />
                </View>
                <View style={CustomOptionsStyles.CARD_SEPARATOR} />
              </Fragment>
            )
          })
        }
      </BlurView>
    </View>
  )
}
