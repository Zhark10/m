import { createAppContainer } from "react-navigation"
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { WelcomeScreen, MapScreen, ProfileScreen } from "../screens"

const stackNavigator = createSharedElementStackNavigator(
  {
    MapScreen,
    WelcomeScreen,
    ProfileScreen
  },
  {
    initialRouteName: "map"
  }
)

export const MainNavigator = createAppContainer(stackNavigator)

const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
