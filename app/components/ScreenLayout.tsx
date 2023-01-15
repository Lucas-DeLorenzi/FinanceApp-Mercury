import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

export interface ScreenLayoutProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export const ScreenMain = observer(function ScreenMain(props: ScreenLayoutProps) {
  const { style } = props
  const $styles = [$container, style]

  return <View {...props} style={$styles} />
})

export const ScreenFooter = observer(function ScreenFooter(props: ScreenLayoutProps) {
  const { style } = props
  const $styles = [$container, style]

  return <View {...props} style={$styles} />
})

const $container: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  alignContent:"center",
  justifyContent: "center",
}
