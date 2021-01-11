import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../../../models"
import { TGamePanelProps } from "./GamePanel"
import { PanelAnimations } from "./GamePanel-Animations"

export const useGamePanel = (props: TGamePanelProps) => {
  const navigation = useNavigation()
  const store = useStores()
  const { panelStyle, initialMessageStyle } = PanelAnimations.usePanelAnimation(props)
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
