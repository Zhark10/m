import React from "react"
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { avg } from "react-native-redash"
import { Circle, Polygon, Path } from "react-native-svg"
import { color } from "../../../../theme"
import { screenWidth } from "../../../../utils/screen"
import Layer from "./Layer"
import { Vector3 } from "./Vector"

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon)
const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedPath = Animated.createAnimatedComponent(Path)

interface VertexProps {
  points: Animated.SharedValue<Vector3[]>
  fill: string
}

const Vertex = ({ points, fill }: VertexProps) => {
  // const animatedProps = useAnimatedProps(() => ({
  //   points: points.value.map(({ x, y }) => [x, y].join(", ")).join(" "),
  //   stroke: color.palette.white,
  //   strokeWidth: 1,
  // }))
  const zIndex = useAnimatedStyle(() => ({
    zIndex: avg(points.value.map(({ z }) => z)),
  }))
  const radius = useSharedValue(50)

  const animatedProps = useAnimatedProps(() => {
    // draw a circle
    const path = `
    M 100, 100
    m -${radius.value}, 0
    a ${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0
    a ${radius.value},${radius.value} 0 1,0 ${-radius.value * 2},0
    `;
    return {
      d: path,
    };
  });
  return (
    // <Layer zIndexStyle={zIndex}>
      <>
        {/* <AnimatedPolygon animatedProps={animatedProps} fill={fill}/> */}
        <AnimatedPath animatedProps={animatedProps} fill="blue" />
        {/* <AnimatedCircle
          cx={0}
          cy={0}
          r={4}
          fill="white"
          style={{ position: 'absolute' }}
        /> */}
      </>
    // </Layer>
  )
}

export default Vertex
