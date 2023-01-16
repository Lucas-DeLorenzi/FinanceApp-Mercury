import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Header, Screen } from "../components"
import { typography } from "../theme"

export const PaymentsScreen: FC<StackScreenProps<AppStackScreenProps<"Payments">>> = observer(
  function PaymentsScreen() {
    return (
      <Screen style={$root} preset="scroll">
        <Header titleStyle={$headerTitle} title="Payments" />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $headerTitle: TextStyle = {
  fontFamily: typography.fonts.montserrat.semiBold,
}
