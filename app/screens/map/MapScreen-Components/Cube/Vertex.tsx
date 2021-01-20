import React from "react"
import Animated, { useAnimatedProps, useAnimatedStyle } from "react-native-reanimated"
import { avg } from "react-native-redash"
import { Polygon } from "react-native-svg"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import { color } from "../../../../theme"
import Layer from "./Layer"
import { Vector3 } from "./Vector"

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon)

interface VertexProps {
  points: Animated.SharedValue<Vector3[]>
  fill: string
}

const Vertex = ({ points, fill }: VertexProps) => {
  const animatedProps = useAnimatedProps(() => ({
    points: points.value.map(({ x, y }) => [x, y].join(", ")).join(" "),
    stroke: color.palette.white,
    strokeWidth: 1,
  }))
  const zIndex = useAnimatedStyle(() => ({
    zIndex: avg(points.value.map(({ z }) => z)),
  }))
  return (
    <>
      <Layer zIndexStyle={zIndex}>
        <AnimatedPolygon animatedProps={animatedProps} fill={fill} />
      </Layer>
    </>
  )
}

export default Vertex
