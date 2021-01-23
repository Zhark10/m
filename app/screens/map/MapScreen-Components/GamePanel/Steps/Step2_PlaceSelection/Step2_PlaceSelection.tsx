/* eslint-disable react-native/no-inline-styles */
import React, { FC, useCallback, useRef } from "react"
import { TouchableOpacity, View } from "react-native"
import { StepCard } from "../StepCard/StepCard"
import { COONTAINER_HEIGHT, SLIDER_WIDTH, Step2Styles } from "./Step2_PlaceSelection-Styles"
import Carousel from "react-native-snap-carousel"
import { useStores } from "../../../../../../models"
import { Text } from "../../../../../../components"
import { getCardColorByCost } from "../../../../../../utils/helpers/get-color"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { color } from "../../../../../../theme"

export const Step2: FC = () => {
  const renderItem = ({ item, index }) => (
    <View key={index} style={Step2Styles.BOX}>
      <Text style={[Step2Styles.PLACE_TITLE, { backgroundColor: getCardColorByCost(item.cost) }]}>
        {item.organizationName}
      </Text>
      <View style={Step2Styles.PLACE_CONTAINER}>
        <View style={Step2Styles.PLACE_BOX}>
          <View style={Step2Styles.PLACE_ITEM}>
            <Text
              style={Step2Styles.PLACE_ITEM_TITLE}
              tx={"mapScreen.game_steps.step_2.current_owner"}
            />
            <Text style={Step2Styles.PLACE_ITEM_INFO}>{item.organizationOwner}</Text>
          </View>
          <View style={Step2Styles.PLACE_ITEM}>
            <Text
              style={Step2Styles.PLACE_ITEM_TITLE}
              tx={"mapScreen.game_steps.step_2.current_owner"}
            />
            <Text style={Step2Styles.PLACE_ITEM_INFO}>{item.organizationOwner}</Text>
          </View>
          <View style={Step2Styles.PLACE_ITEM}>
            <Text
              style={Step2Styles.PLACE_ITEM_TITLE}
              tx={"mapScreen.game_steps.step_2.current_owner"}
            />
            <Text style={Step2Styles.PLACE_ITEM_INFO}>{item.organizationOwner}</Text>
          </View>
        </View>
        <View style={Step2Styles.PLACE_BOX}>
          <View style={Step2Styles.PLACE_ITEM}>
            <Text style={Step2Styles.PLACE_COST}>{item.cost} $</Text>
          </View>
        </View>
      </View>
      {/* <View style={{width: '100%', height: 1, marginBottom: 4, backgroundColor: color.palette.opacity.black40}}/> */}
      <Text style={Step2Styles.COPYRIGHT}>© Somecity, 2020</Text>
    </View>
  )

  const carouselRef = useRef(null)

  const {
    city: { availablePlaces, selectPlace },
    game,
  } = useStores()

  const onSnapToItem = useCallback(
    (index: number) => {
      if (!availablePlaces.length) return
      const currentShowedPlace = availablePlaces[index]
      selectPlace(currentShowedPlace)
    },
    [availablePlaces],
  )

  const rollTheDiceAgain = () => {
    game.resetDiceResult()
  }

  return (
    <StepCard
      title="mapScreen.game_steps.step_2.title"
      theme="light"
      size="small"
      backView={
        <View style={Step2Styles.INFO_CONTAINER}>
          <Text style={Step2Styles.INFO_TITLE}>Подсказка</Text>
          <Text style={Step2Styles.INFO_DESCRIPTION}>
            Пролистывая карточки, ты можешь менять текущее место для постройки
          </Text>
        </View>
      }
      frontView={
        <View style={Step2Styles.CONTAINER}>
          <View style={Step2Styles.CARD_CONTENT}>
            <View style={Step2Styles.CARD_CONTENT_LEFT_BOX}>
              <View style={Step2Styles.INVISIBLE_BOX} />
              <TouchableOpacity
                style={Step2Styles.CARD_CONTENT_LEFT_BOX_LOCATION_ICON_BUTTON}
                onPress={() => null}
              >
                <FontAwesome5Icon
                  name="location-arrow"
                  style={Step2Styles.CARD_CONTENT_LEFT_BOX_ICON}
                />
                <FontAwesome5Icon
                  name="angle-double-right"
                  style={[
                    Step2Styles.CARD_CONTENT_LEFT_BOX_ICON,
                    { color: color.palette.opacity.black72, paddingLeft: 12 },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={Step2Styles.CARD_CONTENT_LEFT_BOX_ICON_BUTTON}
                onPress={rollTheDiceAgain}
              >
                <FontAwesomeIcon
                  name="repeat"
                  style={[
                    Step2Styles.CARD_CONTENT_LEFT_BOX_ICON,
                    { color: color.palette.opacity.black72 },
                  ]}
                />
                <FontAwesome5Icon name="dice-d6" style={Step2Styles.CARD_CONTENT_LEFT_BOX_ICON} />
              </TouchableOpacity>
              <Text style={Step2Styles.ROLL_DICE_REPEAT_TEXT}>-150$</Text>
            </View>
            <Carousel
              ref={carouselRef}
              data={availablePlaces}
              renderItem={renderItem}
              sliderWidth={SLIDER_WIDTH}
              onSnapToItem={onSnapToItem}
              layout="stack"
              loop
              sliderHeight={COONTAINER_HEIGHT + 24}
              itemHeight={COONTAINER_HEIGHT - 24}
              itemWidth={SLIDER_WIDTH - 22}
            />
          </View>
        </View>
      }
    />
  )
}
