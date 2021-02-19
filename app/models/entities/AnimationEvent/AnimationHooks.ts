import { useCallback, useEffect } from "react"
import { TCoordinates } from "../../../utils/types/coordinates"
import { useStores } from "../../root-store/root-store-context"

type TCoordinatesToGoAndComeBack = {
  startPosition: TCoordinates,
  finishPosition: TCoordinates,
}

const TIME_TO_FINISH_ANIMATION = 5000

const useGoToCoordinateAndComeBack = () => {
  const { animationEvent: { goAndComeBack, goAndComeBackActive, goAndComeBackAnimationFinish } } = useStores()

  const goAndComeBackCb = useCallback(({ ...coordinates }: TCoordinatesToGoAndComeBack) => {
    goAndComeBack(coordinates.startPosition, coordinates.finishPosition)
  }, [])

  useEffect(function animationFinish() {
    if (goAndComeBackActive) {
      const goAndComeBackAnimationFinishByTimer = setTimeout(() => {
        goAndComeBackAnimationFinish()
      }, TIME_TO_FINISH_ANIMATION)

      return () => clearTimeout(goAndComeBackAnimationFinishByTimer)
    }

    return () => null
  }, [goAndComeBackActive])

  return { goAndComeBackCb }
}

export const useAnimationHooks = {
  useGoToCoordinateAndComeBack
}
