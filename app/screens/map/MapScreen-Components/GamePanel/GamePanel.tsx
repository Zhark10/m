import React, { FC } from "react"
import Animated from 'react-native-reanimated/src/Animated'
import { Text } from "../../../../components"
import { GamePanelStyles } from "./GamePanel-Styles"
import { useGamePanel } from "./GamePanel-VM"
import { Step1 } from "./Steps/Step1_Dice/Step1_Dice"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Step2 } from "./Steps/Step2_PlaceSelection/Step2_PlaceSelection"

export type TGamePanelProps = {
  isMapTouched: boolean
}

export const GamePanel: FC<TGamePanelProps> = (props) => {
  const vm = useGamePanel(props)
  const { data: { animationStyles } } = vm
  return (
    <Animated.View style={[GamePanelStyles.CONTAINER, animationStyles.panelStyle]}>
      <Animated.View style={[GamePanelStyles.GAME_SPACE, {}]}>
        <Step1 />
        <Step2 />
      </Animated.View>
      <Animated.View style={[GamePanelStyles.INITIAL_MESSAGE_BOX, animationStyles.initialMessageStyle]}>
        <Text style={GamePanelStyles.INITIAL_MESSAGE} tx="mapScreen.roll_the_dice" />
        <FontAwesome5 name="shoe-prints" style={GamePanelStyles.INITIAL_MESSAGE} />
      </Animated.View>
    </Animated.View>
  )
}
