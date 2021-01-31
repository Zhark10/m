import { useStores } from "../../../../models"
import { AnimatedMessageAnimations } from "./AnimatedMessage-Animations"

export const TEXT_SEPARATOR = {
  TITLE: {
    TO_STYLED_TEXT: 'TITLE_TO_STYLED_TEXT',
    TO_ICON: 'TITLE_TO_ICON',
  },
  DESCRIPTION: {
    TO_STYLED_TEXT: 'DESCRIPTION_TO_STYLED_TEXT',
    TO_ICON: 'DESCRIPTION_TO_ICON',
  },
}

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
