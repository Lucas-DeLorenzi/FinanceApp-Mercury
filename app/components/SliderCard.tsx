import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

export interface SliderCardProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export const SliderCard = observer(function SliderCard(props: SliderCardProps) {
  const { style } = props
  const $styles = [$container, style]

  return <View {...props} style={$styles} />
})

export const SliderCardHeader = observer(function SliderCardHeader(props: SliderCardProps) {
  const { style } = props
  const $styles = [$innerContainer, style]

  return <View {...props} style={$styles} />
})

export const SliderCardMain = observer(function SliderCardMain(props: SliderCardProps) {
  const { style } = props
  const $styles = [$innerContainer, style]

  return <View {...props} style={$styles} />
})

export const SliderCardFooter = observer(function SliderCardFooter(props: SliderCardProps) {
  const { style } = props
  const $styles = [$innerContainer, style]

  return <View {...props} style={$styles} />
})

const $container: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
}

const $innerContainer: ViewStyle = {
  flex: 1,
}

