import { AnimatedMessageAnimations } from "./AnimatedMessage-Animations"

export const useAnimatedMessage = () => {
  const { styleMessageShow, hideMessage } = AnimatedMessageAnimations.useMessages()

  return {
    data: {
      animationStyles: {
        styleMessageShow,
      }
    },
    methods: {
      hideMessage
    }
  }
}
