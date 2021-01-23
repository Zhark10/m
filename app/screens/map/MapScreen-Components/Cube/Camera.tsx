import React from "react"
import { StyleSheet } from "react-native"
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler"
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withDecay,
  useAnimatedReaction,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated"
import { Matrix4, processTransform3d } from "react-native-redash"
import { useStores } from "../../../../models"
import { END_SCALE_VALUE, TRollDiceParams } from "./Cube"

import { Vector3 } from "./Vector"

interface CameraProps {
  camera: Animated.SharedValue<Matrix4>
  canvas: Vector3
  rollDiceParams: TRollDiceParams
  cubeNumber: "first" | "second"
}

const toRad = (v: number, size: number) => {
  "worklet"
  return (v / size) * 2 * Math.PI
}

const maxPoint = 6

const Camera = ({
  camera,
  canvas,
  rollDiceParams: { xOffset, yOffset, scale },
  cubeNumber,
}: CameraProps) => {
  const x = useSharedValue(0)
  const y = useSharedValue(0)

  const { game, city } = useStores()

  const updateShare = React.useCallback(() => {
    const result = Math.floor(Math.random() * maxPoint) + 1
    game.saveDiceResult(cubeNumber, result)
    city.setAvailablePlaces(game.radiusInMeters)
  }, [game.radiusInMeters])

  const callback = () => {
    "worklet"
    runOnJS(updateShare)()
  }

  React.useEffect(function cubeRotationInitialize() {
    const initializeCubeRotateByTimer = setTimeout(() => {
      x.value = x.value + 12
      y.value = y.value + 12
    }, 1000)

    return () => clearTimeout(initializeCubeRotateByTimer)
  }, [])

  useAnimatedReaction(
    () => processTransform3d([{ rotateX: y.value }, { rotateY: x.value }]),
    (transform) => {
      camera.value = transform
    },
  )

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      x: number
      y: number
      startX: number
      startY: number
      scale: number
    }
  >({
    onStart: (e, ctx) => {
      ctx.x = x.value
      ctx.y = y.value

      ctx.startX = xOffset.value
      ctx.startY = yOffset.value
      ctx.scale = scale.value
    },
    onActive: ({ translationX, translationY }, ctx) => {
      x.value = ctx.x + toRad(translationX, canvas.x)
      y.value = ctx.y + toRad(translationY, canvas.y)

      xOffset.value = ctx.startX + translationX
      yOffset.value = ctx.startY + translationY
      scale.value = withSpring(1.5)
    },
    onEnd: ({ velocityX, velocityY, translationX, translationY }, ctx) => {
      x.value = withDecay({
        velocity: toRad(velocityX, canvas.x),
      })
      y.value = withDecay({
        velocity: toRad(velocityY, canvas.y),
      })

      const endEventPointByX = ctx.startX + translationX
      const endEventPointByY = ctx.startY + translationY
      const isNotChangeValues = endEventPointByY > -120

      const endPointByX = isNotChangeValues ? ctx.startX : 0.9 * endEventPointByX
      const endPointByY = isNotChangeValues ? ctx.startY : 0.9 * endEventPointByY
      const scaleValue = isNotChangeValues ? 1 : END_SCALE_VALUE

      const config = {
        duration: 1800,
      }

      xOffset.value = withTiming(endPointByX, config)
      yOffset.value = withTiming(endPointByY, config, callback)
      scale.value = withTiming(scaleValue, config)
    },
  })
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={StyleSheet.absoluteFill} />
    </PanGestureHandler>
  )
}

export default Camera
