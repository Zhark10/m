import { useStores } from "../../../../models"
import { AnimatedMessageAnimations } from "./AnimatedMessage-Animations"

export const useAnimatedMessage = () => {
  const { styleMessageShow } = AnimatedMessageAnimations.useMessages()
  const { message, game } = useStores()

  const hideMessage = () => {
    message.hideMessage()
    game.gameProgress.completeStep(game.stepForComplete)
  }

  return {
    data: {
      animationStyles: {
        styleMessageShow,
      },
      message,
    },
    methods: {
      hideMessage,
    },
  }
}
