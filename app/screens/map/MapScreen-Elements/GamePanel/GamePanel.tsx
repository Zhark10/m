import React, { FC, Fragment } from "react"
import Animated from "react-native-reanimated/src/Animated"
import { Text } from "../../../../components"
import { GamePanelStyles } from "./GamePanel-Styles"
import { useGamePanel } from "./GamePanel-VM"
import { Step1 } from "./Steps/Step1_Dice/Step1_Dice"
import { Step2 } from "./Steps/Step2_PlaceSelection/Step2_PlaceSelection"
import { View } from "react-native"
// import { BlurView } from "@react-native-community/blur"
import { observer } from "mobx-react-lite"

export type TGamePanelProps = {
  isMapTouched: boolean
}

export const GamePanel: FC<TGamePanelProps> = observer((props) => {
  const vm = useGamePanel(props)
  const {
    data: { animationStyles },
  } = vm

  const gameSteps = [Step1, Step2]

  return (
    <Animated.View style={[GamePanelStyles.CONTAINER, animationStyles.panelStyle]}>
      {/* <BlurView
        style={GamePanelStyles.BLUR_VIEW}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      /> */}
      <Animated.View style={[GamePanelStyles.GAME_SPACE, animationStyles.stepsStyle]}>
        {gameSteps.map((DynamicStepComponent, key) => (
          <Fragment key={key}>
            <DynamicStepComponent />
            <View style={GamePanelStyles.CARD_SEPARATOR} />
          </Fragment>
        ))}
      </Animated.View>
      <Animated.View
        style={[GamePanelStyles.INITIAL_MESSAGE_BOX, animationStyles.initialMessageStyle]}
      >
        <Text style={GamePanelStyles.INITIAL_MESSAGE} tx="mapScreen.roll_the_dice" />
      </Animated.View>
    </Animated.View>
  )
})
