import React, { FC } from "react"
import { View } from "react-native"
import { Text } from "../../../../../../components"
import { StepCardStyles } from "./StepCard-Styles"
import Entypo from 'react-native-vector-icons/Entypo'

type TProps = {
  size: "large" | "small"
  theme: "dark" | "light"
  title: string
}

export const StepCard: FC<TProps> = ({ children, theme, title }) => {
  const isDark = theme === "dark"
  return (
    <View style={StepCardStyles.CONTAINER}>
      <View style={StepCardStyles.TITLE_BOX}>
        <Text style={StepCardStyles.TITLE} tx={title} />
        <Entypo name="eye" style={StepCardStyles.HELP_ICON}/>
      </View>
      <View style={StepCardStyles.DICE_CONTAINER}>
        {children}
      </View>
    </View>
  )
}
