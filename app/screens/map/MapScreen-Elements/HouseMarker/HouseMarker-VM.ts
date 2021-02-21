import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../../../models"

export const useHouseMarker = () => {
  const navigation = useNavigation()
  const { profile } = useStores()

  return {
    data: {
      profile,
    },
    methods: {},
  }
}
