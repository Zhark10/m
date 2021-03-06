import "./i18n"
import "./utils/ignore-warnings"
import React from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import {
  RootNavigator,
} from "./navigation"
import { RootStoreProvider } from "./models"
import { ToggleStorybook } from "../storybook/toggle-storybook"
import { useInitConfigs } from "./init"

function App() {
  const configs = useInitConfigs()

  if (!configs.rootStore) return null

  return (
    <ToggleStorybook>
      <RootStoreProvider value={configs.rootStore}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <RootNavigator
            ref={configs.navigationRef}
            initialState={configs.initialNavigationState}
            onStateChange={configs.onNavigationStateChange}
          />
        </SafeAreaProvider>
      </RootStoreProvider>
    </ToggleStorybook>
  )
}

export default App
