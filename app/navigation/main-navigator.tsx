import React from "react"
import { WelcomeScreen, MapScreen, ProfileScreen } from "../screens"
import { createSharedElementStackNavigator } from "react-navigation-shared-element"
import { enableScreens } from "react-native-screens"
import { ROUTES } from "./routes"

export type PrimaryParamList = {
  welcome: undefined
  map: undefined
  profile: undefined
}

enableScreens()
const Stack = createSharedElementStackNavigator()

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={ROUTES.MAP} component={MapScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
