import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { WelcomeScreen, MapScreen, ProfileScreen } from "../screens"
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

export type PrimaryParamList = {
  welcome: undefined
  map: undefined
  profile: undefined
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
      <Stack.Screen name="profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
