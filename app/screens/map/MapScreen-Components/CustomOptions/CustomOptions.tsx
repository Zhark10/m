import React, { FC, Fragment } from "react"
import { Header, Text } from "../../../../components"
import { View } from "react-native"
import { BlurView } from "@react-native-community/blur"
import { CustomOptionsStyles } from "./CustomOptions-Styles"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { color, typography } from "../../../../theme"
import { useCustomOptions } from "./CustomOptions-VM"
import { observer } from "mobx-react-lite"

export type TCustomOptionsProps = {

}

export const CustomOptions: FC<TCustomOptionsProps> = observer(() => {
  const vm = useCustomOptions()
  const { data: { OPTIONS } } = vm

  return (
    <View style={CustomOptionsStyles.CONTAINER}>
      <Header style={CustomOptionsStyles.HEADER} />
      <View
        style={CustomOptionsStyles.BLUR_VIEW}
      >
        {
          OPTIONS.map((opt, index) => {
            const optionData = opt.complete
              ? {
                  backgroundColor: color.palette.opacity.gold32,
                  icon: "check-circle",
                  textColor: color.palette.black,
                  iconColor: color.palette.gold,
                }
              : {
                  backgroundColor: color.transparent,
                  icon: "question-circle",
                  textColor: color.palette.black,
                  iconColor: color.palette.black,
                }
            const prevStateIsComplete = (index > 0 && OPTIONS[index - 1].complete)
            return (
              <Fragment key={opt.tx}>
                <View style={CustomOptionsStyles.OPTION}>
                  <View style={CustomOptionsStyles.OPTION}>
                    <Text
                      style={[
                        CustomOptionsStyles.OPTION_TITLE,
                        {
                          color: optionData.textColor,
                          fontFamily: prevStateIsComplete ? typography.primary.book : typography.primary.book
                        }
                      ]}
                      tx={opt.tx}
                    />
                    <FontAwesome name={optionData.icon} style={[CustomOptionsStyles.CHECKBOX_ICON, { color: optionData.iconColor }]} />
                  </View>
                  {index !== (OPTIONS.length - 1) && <View style={[CustomOptionsStyles.CARD_SEPARATOR, { backgroundColor: optionData.iconColor }]} />}
                </View>
              </Fragment>
            )
          })
        }
      </View>
    </View>
  )
})
