import React, { FC } from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { HouseMarkerStyles } from "./HouseMarker-Styles"

export type THouseMarkerProps = {
}

export const HouseMarker: FC<THouseMarkerProps> = observer((props) => {
  return (
    <View style={HouseMarkerStyles.MARKER_CONTAINER}>
      <View style={HouseMarkerStyles.CIRCLE}/>
      <View style={HouseMarkerStyles.PILLAR}/>
    </View>
  )
})
