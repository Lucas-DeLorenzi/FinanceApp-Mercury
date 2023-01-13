import * as React from "react"
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors as themeColors, spacing, typography } from "../../theme"
import { Text } from "../Text"
import { Panel, PanelLayoutHeader, PanelLayoutMain } from "../PanelLayout"
import { Button } from "../Button"
import { Icon } from "../Icon"
import { useTheme } from "@react-navigation/native"
import { Transaction } from "./Transaction"

export interface RecentTransactionsPanelProps {
  transactionsData: any
  style?: StyleProp<ViewStyle>
}

export const RecentTransactionsPanel = observer(function RecentTransactionsPanel(
  props: RecentTransactionsPanelProps,
) {
  const { colors } = useTheme()

  const { style, transactionsData } = props
  const $styles = [$container(colors), style]

  return (
    <Panel
      style={$styles}
      contentContainerStyle={$contentContainerStyle}
      showsVerticalScrollIndicator={false}
    >
      <PanelLayoutHeader style={$header}>
        <Text text="Recent transactions" style={$headerText(colors)} />
        <Button
          preset="default"
          style={$headerButton}
          textStyle={$headerButtonText}
          pressedStyle={$headerButtonPressed}
          onPress={() => null}
        >
          <Icon icon="filter" style={$headerButtonIcon} />
        </Button>
      </PanelLayoutHeader>
      <PanelLayoutMain style={$panelLayoutMain}>
        {transactionsData.map((transaction, index) => (
          <Transaction
            key={transaction.name}
            transactionData={transaction}
            isBorderBottomActive={index !== transactionsData.length - 1}
          />
        ))}
      </PanelLayoutMain>
    </Panel>
  )
})

function $container(colors) {
  const $container: ViewStyle = {
    maxHeight: "48%",
    marginHorizontal: spacing.small,
    marginVertical: spacing.small,
    paddingHorizontal: spacing.extraMedium,
    paddingTop: spacing.extraMedium,
    backgroundColor: colors.card,
    borderColor: colors.card,
    borderRadius: 30,
  }
  return $container
}

const $contentContainerStyle: ViewStyle = {}

const $header: ViewStyle = {
  justifyContent: "space-between",
  alignItems: "center",
  maxHeight: 30,
}

function $headerText(colors) {
  const $headerText: TextStyle = {
    fontSize: 17,
    color: colors.text,
    fontFamily: typography.fonts.montserrat.semiBold,
  }
  return $headerText
}

const $headerButton: ViewStyle = {
  minHeight: 30,
  height: 30,
  width: 30,
  paddingHorizontal: 0,
  paddingVertical: 0,
  backgroundColor: themeColors.background,
  borderRadius: 15,
  borderColor: themeColors.background,
}

const $headerButtonText: TextStyle = {
  textAlignVertical: "center",
}

const $headerButtonIcon: ImageStyle = {
  width: 14,
}

const $headerButtonPressed: ViewStyle = {
  backgroundColor: themeColors.palette.blueViolet200,
  borderColor: themeColors.palette.blueViolet200,
}

const $panelLayoutMain: ViewStyle = {
  flexDirection: "column",
  marginVertical: spacing.extraMedium,
}
