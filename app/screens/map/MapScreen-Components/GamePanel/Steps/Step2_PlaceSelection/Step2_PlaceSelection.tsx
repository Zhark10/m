import React, { FC, useRef } from "react"
import { View, Text } from "react-native"
import { StepCard } from "../StepCard/StepCard"
import { COONTAINER_HEIGHT, Step2Styles } from "./Step2_PlaceSelection-Styles"
import Carousel from 'react-native-snap-carousel'
import { screenWidth } from "../../../../../../utils/screen"
import { useStores } from "../../../../../../models"

export const Step2: FC = () => {
  const renderItem = ({ item, index }) => (
    <View
      key={index}
      style={Step2Styles.BOX}
    >
      <Text style={Step2Styles.PLACE_TITLE}>{item.organizationName}</Text>
    </View>
  )

  const carouselRef = useRef(null)

  const { city: { availablePlaces } } = useStores()

  return (
    <StepCard title="mapScreen.game_steps.step_2" theme="light" size="small">
      <View
        style={Step2Styles.CONTAINER}
      >
        <Carousel
          ref={carouselRef}
          data={availablePlaces}
          renderItem={renderItem}
          sliderWidth={screenWidth / 2}
          layout="tinder"
          layoutCardOffset={COONTAINER_HEIGHT}
          itemWidth={screenWidth / 2 - 42}
        />
      </View>
    </StepCard>
  )
}
