import React, { FC, useCallback, useRef } from "react"
import { View, Text } from "react-native"
import { StepCard } from "../StepCard/StepCard"
import { COONTAINER_HEIGHT, Step2Styles } from "./Step2_PlaceSelection-Styles"
import Carousel from 'react-native-snap-carousel'
import { screenWidth } from "../../../../../../utils/screen"
import { useStores } from "../../../../../../models"
import { Button } from "../../../../../../components"

export const Step2: FC = () => {
  const renderItem = ({ item, index }) => (
    <View
      key={index}
      style={Step2Styles.BOX}
    >
      <Text style={Step2Styles.PLACE_TITLE}>{item.organizationName}</Text>
      <View style={Step2Styles.PLACE_ITEM}>
        <Text style={Step2Styles.PLACE_ITEM_TITLE}>Текущий владелец: </Text>
        <Text style={Step2Styles.PLACE_ITEM_INFO}>{item.organizationOwner}</Text>
      </View>
      <View style={Step2Styles.PLACE_ITEM}>
        <Text style={Step2Styles.PLACE_ITEM_TITLE}>Стоимость: </Text>
        <Text style={Step2Styles.PLACE_COST}>{item.cost} $</Text>
      </View>
      <Button
        style={Step2Styles.REGISTRATION_BUTTON}
        textStyle={Step2Styles.REGISTRATION_BUTTON_TEXT}
        tx={"mapScreen.game_steps.step_2.buy_button"}
        onPress={() => ({})}
      />
    </View>
  )

  const carouselRef = useRef(null)

  const { city: { availablePlaces, selectPlace } } = useStores()
  const placesToAction = [...availablePlaces]

  const onSnapToItem = useCallback((index: number) => {
    const currentShowedPlace = placesToAction[index]
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
            data={placesToAction}
            renderItem={renderItem}
            sliderWidth={screenWidth / 2}
            onSnapToItem={onSnapToItem}
            layout="tinder"
            layoutCardOffset={COONTAINER_HEIGHT}
            itemWidth={screenWidth / 2 - 42}
          />
        </View>
      }
    />
  )
}