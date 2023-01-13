import * as React from "react"
import { ScrollView, StyleProp, View, ViewStyle, ScrollViewProps } from "react-native"
import { observer } from "mobx-react-lite"

export interface PanelLayoutProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export interface PanelProps extends ScrollViewProps{
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
}

export const Panel = observer(function Panel(props: PanelProps) {
  const { style, contentContainerStyle } = props
  const $styles = [$panelContainer, style]
  const $contentContainerStyle = [$container, contentContainerStyle]

  return <ScrollView {...props} style={$styles} contentContainerStyle={$contentContainerStyle} />
})

export const PanelLayoutHeader = observer(function PanelLayoutHeader(props: PanelLayoutProps) {
  const { style } = props
  const $styles = [$innerContainer, style]

  return <View {...props} style={$styles} />
})

export const PanelLayoutMain = observer(function PanelLayoutMain(props: PanelLayoutProps) {
  const { style } = props
  const $styles = [$innerContainer, style]

  return <View {...props} style={$styles} />
})

const $container: ViewStyle = {
  flexDirection: "column",
}

const $innerContainer: ViewStyle = {
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
}

const $panelContainer: ViewStyle = {}
