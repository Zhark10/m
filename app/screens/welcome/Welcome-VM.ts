import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useState } from "react"

export const useWelcome = () => {
  const navigation = useNavigation()
  const goToMap = useCallback(() => navigation.navigate("demo"), [])
  const [timeToPlay, setTimer] = useState(8)

  useEffect(() => {
    // const goToStartByTime = setInterval(() => {
    //   setTimer(currentTimeValue => currentTimeValue - 1)
    // }, 1000)

    // return () => clearInterval(goToStartByTime)
  }, [])

  useEffect(() => {
    if (timeToPlay < 1) {
      navigation.navigate("demo")
      setTimer(8)
    }
  }, [timeToPlay])

  return {
    data: { timeToPlay },
    methods: { goToMap }
  }
}
