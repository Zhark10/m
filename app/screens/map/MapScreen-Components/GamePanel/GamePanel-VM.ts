import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../../../models"
import { TGamePanelProps } from "./GamePanel"
import { PanelAnimations } from "./GamePanel-Animations"

export const useGamePanel = (props: TGamePanelProps) => {
  const navigation = useNavigation()
  const store = useStores()
  const { panelStyle, initialMessageStyle } = PanelAnimations.usePanelAnimation(props)

  return {
    data: {
      animationStyles: {
        panelStyle,
        initialMessageStyle,
      }
    },
    methods: {
    }
  }
}
