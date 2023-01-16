import * as React from "react"
import { ImageStyle, StyleProp, TextStyle, ViewStyle, Dimensions } from "react-native"
import { observer } from "mobx-react-lite"
import { colors as themeColors, spacing, typography } from "../../theme"
import { Text } from "../Text"
import { Panel, PanelLayoutHeader, PanelLayoutMain } from "../PanelLayout"
import { Button } from "../Button"
import { Icon } from "../Icon"
import { useNavigation, useTheme } from "@react-navigation/native"
import { Transaction } from "./Transaction"

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HORIZONTAL_MARGIN = spacing.small * 2
const PANEL_WIDTH = SCREEN_WIDTH - SCREEN_HORIZONTAL_MARGIN

export interface RecentTransactionsPanelProps {
  transactionsData: any
  style?: StyleProp<ViewStyle>
}

export const RecentTransactionsPanel = observer(function RecentTransactionsPanel(
  props: RecentTransactionsPanelProps,
) {
  const { colors } = useTheme()
  const navigation = useNavigation()

  const { style, transactionsData } = props
  const $styles = [$panelContainer(colors), style]

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
        {transactionsData?.map((transaction, index) => (
          <Transaction
            key={transaction.name}
            transactionData={transaction}
            isBorderBottomActive={index !== transactionsData.length - 1}
          />
        ))}
        <Button
          text="View all transactions"
          style={$mainContainerButton}
          textStyle={$mainContainerButtonText}
          onPress={() => navigation.navigate("AllTransactions")}
        />
      </PanelLayoutMain>
    </Panel>
  )
})

function $panelContainer(colors) {
  const $container: ViewStyle = {
    flex: 1,
    minHeight: "20%",
    width: PANEL_WIDTH,
    marginVertical: spacing.small,
    paddingHorizontal: spacing.extraMedium,
    paddingTop: spacing.extraMedium,
    backgroundColor: colors.card,
    borderColor: colors.card,
    borderRadius: 30,
  }
  return $container
}

const $contentContainerStyle: ViewStyle = {
  maxWidth: "100%",
}

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

const $mainContainerButton: ViewStyle = {
  marginBottom: spacing.extraSmall,
  borderRadius: 25,
}

const $mainContainerButtonText: TextStyle = {
  fontSize: 12,
}
