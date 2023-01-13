import * as React from "react"
import { StyleProp, ViewStyle, FlatList, Dimensions, ImageStyle, View } from "react-native"
import { observer } from "mobx-react-lite"
import { AccountCard } from "./AccountCard"
import { Icon } from "../Icon"
import { spacing } from "../../theme"
import { Account } from "../../services/api"

const SCREEN_WIDTH = Dimensions.get("window").width
const ACCOUNT_CARD_WIDTH = SCREEN_WIDTH * 0.88
const CARD_HORIZONTAL_MARGIN = 10
const CARD_OFFSET_RANGE = ACCOUNT_CARD_WIDTH + CARD_HORIZONTAL_MARGIN * 2

export interface CarouselProps {
  data: Array<Account>
  style?: StyleProp<ViewStyle>
}

export const Carousel = observer(function Carousel(props: CarouselProps) {
  const { style, data } = props
  const $styles = [$carouselContainer, style]

  const [currentIndex, setCurrentIndex] = React.useState(0)

  const renderItem = ({ item }) => {
    return <AccountCard accountData={item} cardWidth={ACCOUNT_CARD_WIDTH} />
  }

  const onMomentumScrollEnd = (event) => {
    const index = Math.ceil(event.nativeEvent.contentOffset.x / CARD_OFFSET_RANGE)
    setCurrentIndex(index)
  }

  return (
    <View style={$styles}>
      <View style={$pagination}>
        {data?.map((item, index) => {
          return (
            <Icon
              key={item.accountId}
              icon={index === currentIndex ? "paginationActive" : "paginationInactive"}
              style={$paginationIcon}
            />
          )
        })}
      </View>
      <FlatList
        horizontal
        style={$cardsContainer}
        data={data}
        decelerationRate={"fast"}
        snapToInterval={CARD_OFFSET_RANGE}
        scrollEventThrottle={32}
        renderItem={renderItem}
        keyExtractor={(item) => item.accountId}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
    </View>
  )
})

const $carouselContainer: ViewStyle={
  height:"28%",
  paddingHorizontal: spacing.micro,
  marginRight: spacing.tiny,

}

const $cardsContainer: ViewStyle = {
  paddingHorizontal: spacing.micro,
  marginRight: spacing.tiny,
}

const $pagination: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height:"15%",
}

const $paginationIcon: ImageStyle = {
  marginHorizontal: spacing.extraSmall,
}
