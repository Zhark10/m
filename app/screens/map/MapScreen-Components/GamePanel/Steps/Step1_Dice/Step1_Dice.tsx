import React, { FC } from "react"
import { View } from "react-native"
import { Text } from "../../../../../../components"
import { Cube } from "../../../Cube/Cube"
import { StepCard } from "../StepCard/StepCard"
import { Step1Styles } from "./Step1_Dice-Styles"
import { useStep1 } from "./Step1_Dice-VM"

export const Step1: FC = () => {
  useStep1()

  return (
    <StepCard title="mapScreen.game_steps.step_1" theme="light" size="small"
      backView={
        <View style={Step1Styles.INFO_CONTAINER}>
          <Text style={Step1Styles.INFO_TITLE}>Подсказка</Text>
          <Text style={Step1Styles.INFO_DESCRIPTION}>Чтобы бросить кубики, нужно смахнуть их на карту</Text>
        </View>
      }
      frontView={
        <View style={Step1Styles.DICE_CONTAINER}>
          <Cube cubeNumber="first"/>
          <Cube cubeNumber="second"/>
        </View>
      }
    />
  )
}
