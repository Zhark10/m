import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { WelcomeScreen, MapScreen } from "../screens"

export type PrimaryParamList = {
  welcome: undefined
  map: undefined
}

const Stack = createStackNavigator<PrimaryParamList>()

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="map" component={MapScreen} />
    </Stack.Navigator>
  )
}

const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
