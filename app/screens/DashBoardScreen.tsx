import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Header, Screen } from "../components"
import { typography } from "../theme"
import { useTheme } from "@react-navigation/native"

export const DashBoardScreen: FC<StackScreenProps<AppStackScreenProps<"DashBoard">>> = observer(
  function DashBoardScreen() {

    const theme = useTheme()

    return (
      <Screen style={$root(theme)} preset="scroll">
        <Header titleStyle={$headerTitle} title="Dashboard" />
      </Screen>
    )
  },
)

function $root(theme) {
  const $root: ViewStyle = {
    flex: 1,
    backgroundColor: theme.colors.background,
  }
  return $root
}

const $headerTitle: TextStyle = {
  fontFamily: typography.fonts.montserrat.semiBold,
}
