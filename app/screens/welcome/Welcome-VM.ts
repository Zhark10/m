import { useNavigation } from "@react-navigation/native"
import { useCallback } from "react"
import { welcomeAnimations } from "./Welcome-Animations"

export enum EIconType {
  LEFT, RIGHT
}

export const useWelcome = () => {
  const navigation = useNavigation()
  const goToMap = useCallback(() => navigation.navigate("demo"), [])

  const { useTitleAnimation, useDeparturePictureFromTheSide } = welcomeAnimations
  const { style: titleStyle } = useTitleAnimation()
  const { logoStyle, vkStyle, facebookStyle, googleStyle, questStyle, showFooterStyle, showQuestDescriptionStyle } = useDeparturePictureFromTheSide()

  const providers = [
    {
      name: "facebook",
      onPress: goToMap,
      iconType: EIconType.LEFT,
      animationStyle: facebookStyle,
    },
    {
      name: "google",
      onPress: goToMap,
      iconType: EIconType.LEFT,
      animationStyle: googleStyle,
    },
    {
      name: "vk",
      onPress: goToMap,
      iconType: EIconType.LEFT,
      animationStyle: vkStyle,
    }
  ]

  const guest = {
    name: "user",
    onPress: goToMap,
    iconType: EIconType.RIGHT,
    animationStyle: questStyle,
  }

  return {
    data: {
      providers,
      guest,
      animationStyles: {
        titleStyle,
        logoStyle,
        showFooterStyle,
        showQuestDescriptionStyle,
      }
    },
    methods: { goToMap }
  }
}
