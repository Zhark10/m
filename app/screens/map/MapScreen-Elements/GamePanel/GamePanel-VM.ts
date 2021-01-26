import { TGamePanelProps } from "./GamePanel"
import { PanelAnimations } from "./GamePanel-Animations"

export const useGamePanel = (props: TGamePanelProps) => {
  const { panelStyle, initialMessageStyle } = PanelAnimations.usePanelAnimation(props)
  const { stepsStyle } = PanelAnimations.useStepChangeAnimation()

  return {
    data: {
      animationStyles: {
        panelStyle,
        initialMessageStyle,
        stepsStyle,
      },
    },
    methods: {},
  }
}
