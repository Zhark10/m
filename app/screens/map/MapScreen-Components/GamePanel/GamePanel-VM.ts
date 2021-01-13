import { PanelAnimations } from "./GamePanel-Animations"

export const useGamePanel = () => {
  const { panelStyle, initialMessageStyle } = PanelAnimations.usePanelAnimation()
  const { stepsStyle } = PanelAnimations.useStepChangeAnimation()

  return {
    data: {
      animationStyles: {
        panelStyle,
        initialMessageStyle,
        stepsStyle,
      }
    },
    methods: {
    }
  }
}
