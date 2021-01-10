import React, { ReactElement, useContext } from "react"
import { View } from "react-native"
import Animated, { useSharedValue } from "react-native-reanimated"
import { identityMatrix4, Matrix4 } from "react-native-redash"

import Camera from "./Camera"
import { TRollDiceParams } from "./Cube"
import { Vector3 } from "./Vector"

const Context = React.createContext<ZSvgContext | null>(null)

export const useZSvg = () => {
  const ctx = useContext(Context)
  if (ctx === null) {
    throw new Error("No provider found")
  }
  return ctx
}

interface ZSvgContext {
  camera: Animated.SharedValue<Matrix4>;
  canvas: Vector3;
}

interface ZSvgProps {
  canvas: Vector3;
  children: ReactElement[] | ReactElement;
  rollDiceParams: TRollDiceParams
  setDiceResult: React.Dispatch<React.SetStateAction<number>>
}

const ZSvg = ({ canvas, children, rollDiceParams, setDiceResult }: ZSvgProps) => {
  const camera = useSharedValue(identityMatrix4)
  return (
    <Context.Provider value={{ canvas, camera }}>
      <View style={{ width: canvas.x, height: canvas.y }}>
        {children}
        <Camera camera={camera} canvas={canvas} rollDiceParams={rollDiceParams} setDiceResult={setDiceResult} />
      </View>
    </Context.Provider>
  )
}

export default ZSvg
