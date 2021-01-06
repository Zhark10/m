import React, { FC } from "react"
import { View } from "react-native"
import { Text } from "../../../../../../components"
import { Cube } from "../../../Cube/Cube"
import { StepCard } from "../StepCard/StepCard"
import { Step1Styles } from "./Step1_Dice-Styles"

export const Step1: FC = () => {
  return (
    <StepCard title="mapScreen.game_steps.step_1" theme="light" size="small">
      <>
        <Cube />
        <Cube />
      </>
    </StepCard>
  )
}
