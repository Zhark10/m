import { NavigationContainerRef } from "@react-navigation/native"
import { useRef, useState, useEffect } from "react"
import { RootStore, setupRootStore } from "./models"
import { setRootNavigation, useBackButtonHandler, canExit, useNavigationPersistence } from "./navigation"
import { initFonts } from "./theme/fonts"
import { enableScreens } from "react-native-screens"
import * as storage from "./utils/storage"

enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

export const useInitConfigs = () => {
  const navigationRef = useRef<NavigationContainerRef>()
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  setRootNavigation(navigationRef)
  useBackButtonHandler(navigationRef, canExit)
  const { initialNavigationState, onNavigationStateChange } = useNavigationPersistence(
    storage,
    NAVIGATION_PERSISTENCE_KEY,
  )

  useEffect(() => {
    const initialize = async () => {
      await initFonts()
      setupRootStore().then(setRootStore)
    }

    initialize()
  }, [])

  return {
    rootStore,
    navigationRef,
    initialNavigationState,
    onNavigationStateChange
  }
}
