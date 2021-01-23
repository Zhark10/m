import React from "react"
import { useDerivedValue } from "react-native-reanimated"
import { v1, v4 } from "react-native-uuid"
import { useCountPoints } from "./useCountPoints"
import { usePoints } from "./usePoints"
import { project } from "./Vector"

import Vertex from "./Vertex"
import { useZSvg } from "./ZSvg"

interface ZBoxProps {
  width: number
  height: number
  depth: number
  front: string
  back: string
  left: string
  right: string
  top: string
  bottom: string
}

const ZBox = ({ width, height, depth, front, back, top, bottom, left, right }: ZBoxProps) => {
  const points = usePoints(width, height, depth)
  const countPoints = useCountPoints(width, height, depth)
  return (
    <>
      <Vertex points={points.v1} pointsForCount={countPoints.v1} fill={front} />
      <Vertex points={points.v2} pointsForCount={countPoints.v2} fill={back} />
      <Vertex points={points.v3} pointsForCount={countPoints.v3} fill={left} />
      <Vertex points={points.v4} pointsForCount={countPoints.v4} fill={right} />
      <Vertex points={points.v5} pointsForCount={countPoints.v5} fill={top} />
      <Vertex points={points.v6} pointsForCount={countPoints.v6} fill={bottom} />
    </>
  )
}

export default ZBox
