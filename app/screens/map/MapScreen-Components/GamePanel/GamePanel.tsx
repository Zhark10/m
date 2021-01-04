import React, { FC } from "react"
import { View } from "react-native"
import Animated from 'react-native-reanimated/src/Animated'
import { GamePanelStyles } from "./GamePanel-Styles"
import { useGamePanel } from "./GamePanel-VM"

export const GamePanel: FC = () => {
  const vm = useGamePanel()

  return (
    <Animated.View style={GamePanelStyles.CONTAINER}>
      <View />
    </Animated.View>
  )
}
