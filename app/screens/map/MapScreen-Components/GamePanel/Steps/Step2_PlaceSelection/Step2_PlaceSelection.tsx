import React, { FC, useCallback, useRef } from "react"
import { View } from "react-native"
import { StepCard } from "../StepCard/StepCard"
import { COONTAINER_HEIGHT, Step2Styles } from "./Step2_PlaceSelection-Styles"
import Carousel from 'react-native-snap-carousel'
import { screenWidth } from "../../../../../../utils/screen"
import { useStores } from "../../../../../../models"
import { Button, Text } from "../../../../../../components"

export const Step2: FC = () => {
  const renderItem = ({ item, index }) => (
    <View
      key={index}
      style={Step2Styles.BOX}
    >
      <Text style={Step2Styles.PLACE_TITLE}>{item.organizationName}</Text>
      <View style={Step2Styles.PLACE_CONTAINER}>
        <View style={Step2Styles.PLACE_ITEM}>
          <Text style={Step2Styles.PLACE_ITEM_TITLE} tx={"mapScreen.game_steps.step_2.current_owner"} />
          <Text style={Step2Styles.PLACE_ITEM_INFO}>{item.organizationOwner}</Text>
        </View>
        <View style={Step2Styles.PLACE_ITEM}>
          <Text style={Step2Styles.PLACE_COST}>{item.cost} $</Text>
        </View>
      </View>
      <Button
        style={Step2Styles.CARD_BUTTON}
        onPress={() => ({})}
      >
        <Text>
          <Text style={Step2Styles.CARD_BUTTON_TEXT} tx="mapScreen.game_steps.step_2.go_button" />
          {/* <Text style={Step2Styles.CARD_BUTTON_PLACE_TEXT}> {item.organizationName}</Text> */}
        </Text>
      </Button>
    </View>
  )

  const carouselRef = useRef(null)

  const { city: { availablePlaces, selectPlace } } = useStores()

  const onSnapToItem = useCallback((index: number) => {
    if (!availablePlaces.length) return
    const currentShowedPlace = availablePlaces[index]
    selectPlace(currentShowedPlace)
  }, [availablePlaces])

  return (
    <StepCard title="mapScreen.game_steps.step_2.title" theme="light" size="small"
      backView={
        <View style={Step2Styles.INFO_CONTAINER}>
          <Text style={Step2Styles.INFO_TITLE}>Подсказка</Text>
          <Text style={Step2Styles.INFO_DESCRIPTION}>Пролистывая карточки, ты можешь менять текущее место для постройки</Text>
        </View>
      }
      frontView={
        <View
          style={Step2Styles.CONTAINER}
        >
          <Carousel
            ref={carouselRef}
            data={availablePlaces}
            renderItem={renderItem}
            sliderWidth={screenWidth}
            onSnapToItem={onSnapToItem}
            layout="stack"
            layoutCardOffset={COONTAINER_HEIGHT}
            itemWidth={screenWidth - 42}
          />
        </View>
      }
    />
  )
}
