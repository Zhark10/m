import React from "react"
import { WelcomeScreen, MapScreen, ProfileScreen } from "../screens"
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { enableScreens } from 'react-native-screens'

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
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="map" component={MapScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
