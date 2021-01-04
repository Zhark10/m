import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../../../models"

export const useGamePanel = () => {
  const navigation = useNavigation()
  const store = useStores()

  return {
    data: {
    },
    methods: {
    }
  }
}
