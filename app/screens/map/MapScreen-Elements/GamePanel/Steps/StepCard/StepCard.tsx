import React, { FC, useRef } from "react"
import { TouchableOpacity, View } from "react-native"
import { Text } from "../../../../../../components"
import { StepCardStyles } from "./StepCard-Styles"
import Entypo from "react-native-vector-icons/Entypo"
import CardFlip from "react-native-card-flip"

type TProps = {
  size: "large" | "small"
  theme: "dark" | "light"
  title: string
  FrontView: React.ReactNode
  BackView: React.ReactNode
}

export const StepCard: FC<TProps> = ({ theme, title, FrontView, BackView }) => {
  const cardRef = useRef(null)
  return (
    <View style={StepCardStyles.CONTAINER}>
      <View style={StepCardStyles.TITLE_BOX}>
        <Text style={StepCardStyles.TITLE} tx={title} />
        <TouchableOpacity onPress={() => cardRef.current?.flip()}>
          <Entypo name="info" style={StepCardStyles.HELP_ICON} />
        </TouchableOpacity>
      </View>
      <CardFlip style={StepCardStyles.STEP_CARD_FLIP} ref={cardRef}>
        <View style={StepCardStyles.CARD_BOX}>{FrontView}</View>
        <View style={StepCardStyles.CARD_BOX}>{BackView}</View>
      </CardFlip>
    </View>
  )
}
