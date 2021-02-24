import React from "react"
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { WelcomeScreen, MapScreen, ProfileScreen } from "../screens"

export type PrimaryParamList = {
  welcome: undefined
  map: undefined
  profile: undefined
}

const Stack = createSharedElementStackNavigator(
  {
    MapScreen,
    WelcomeScreen,
    ProfileScreen
  },
  {
    initialRouteName: "MapScreen"
  }
)

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
