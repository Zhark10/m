import React, { FC } from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { HouseMarkerStyles } from "./HouseMarker-Styles"

export const HouseMarker: FC = observer(() => {
  return (
    <View style={HouseMarkerStyles.MARKER_CONTAINER}>
      <View style={HouseMarkerStyles.CIRCLE} />
      <View style={HouseMarkerStyles.PILLAR} />
    </View>
  )
})
