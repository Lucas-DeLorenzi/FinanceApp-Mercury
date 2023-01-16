import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Header, Screen } from "../components"
import { typography } from "../theme"
import { useTheme } from "@react-navigation/native"

export const SettingsScreen: FC<StackScreenProps<AppStackScreenProps<"Settings">>> = observer(
  function SettingsScreen() {

    const { colors } = useTheme()

    return (
      <Screen style={$root(colors)} preset="scroll">
        <Header titleStyle={$headerTitle} title="Settings" />
      </Screen>
    )
  },
)

function $root(colors) {
  const $root: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
  }
  return $root
}

const $headerTitle: TextStyle = {
  fontFamily: typography.fonts.montserrat.semiBold,
}
