import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

export interface NavigationBarProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export const NavigationBar = observer(function NavigationBar(props: NavigationBarProps) {
  const { style } = props
  const $styles = [$navigationBar, style]

  return <View {...props} style={$styles} />
})

const $navigationBar: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
}
