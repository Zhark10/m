import React from "react"
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
} from "react-native-reanimated"
import { avg } from "react-native-redash"
import { Circle, Polygon } from "react-native-svg"
import { color } from "../../../../theme"
import { screenWidth } from "../../../../utils/screen"
import Layer from "./Layer"
import { Vector3 } from "./Vector"

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon)
const AnimatedCircle = Animated.createAnimatedComponent(Circle)

interface VertexProps {
  points: Animated.SharedValue<Vector3[]>;
  fill: string;
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
    <Layer zIndexStyle={zIndex}>
      <>
        <AnimatedPolygon animatedProps={animatedProps} fill={fill} />
        {/* <AnimatedCircle
          cx={0}
          cy={0}
          r={4}
          fill="white"
        /> */}
      </>
    </Layer>
  )
}

export default Vertex
