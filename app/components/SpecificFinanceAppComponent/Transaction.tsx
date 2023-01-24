import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors as themeColors, spacing, typography } from "../../theme"
import { Text } from "../Text"
import { Icon } from "../Icon"
import { useTheme } from "@react-navigation/native"

interface TransactionItem {
  name: string
  date: string
  amount: string
  paymentType: string
  isPositive: boolean
  purpose: "travel" | "taxi" | "personal" | "business" | "restaurant"
}

export interface TransactionProps {
  isBorderBottomActive?: boolean
  transactionData: TransactionItem
  style?: StyleProp<ViewStyle>
}

export const Transaction = observer(function Transaction(props: TransactionProps) {
  const theme = useTheme()
  const { style, transactionData, isBorderBottomActive = true } = props
  const $styles = [$transactionContainer, style]

  return (
    <View style={$styles}>
      <View style={$iconContainer}>
        <Icon icon={transactionData.purpose} />
      </View>
      <View style={$textContainer(theme, isBorderBottomActive)}>
        <View style={$leftContent}>
          <Text text={transactionData.name} style={$nameText(theme)} />
          <Text text={transactionData.date} style={$subtitleText(theme)} />
        </View>
        <View style={$rightContent}>
          <Text text={transactionData.amount} style={$amountText(transactionData.isPositive)} />
          <Text text={transactionData.paymentType} style={$subtitleText(theme)} />
        </View>
      </View>
    </View>
  )
})

const $transactionContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 60,
  width: "100%",
  marginHorizontal: spacing.extraMedium,
}

const $iconContainer: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  width: 30,
  height: 30,
  borderRadius: 8,
  backgroundColor: themeColors.palette.orange100,
}

function $textContainer(theme, isBorderBottomActive) {
  const $textContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
    height: "100%",
    borderBottomWidth: isBorderBottomActive ? 1 : 0,
    borderBottomColor: theme.dark ? themeColors.palette.darkGrey100 : themeColors.palette.lightGrey200,
  }
  return $textContainer
}
const $leftContent: ViewStyle = {}

const $rightContent: ViewStyle = {
  alignItems: "flex-end",
}

const $titleText: TextStyle = {
  fontFamily: typography.fonts.montserrat.semiBold,
  fontSize: 12,
  lineHeight: 14,
}

function $subtitleText(theme) {
  const $subtitleText: TextStyle = {
    fontFamily: typography.fonts.montserrat.semiBold,
    fontSize: 11,
    lineHeight: 13,
    color: theme.dark ? themeColors.palette.darkGrey100 : themeColors.palette.lightGrey100,
  }
  return $subtitleText
}

function $nameText(theme) {
  const $nameText: TextStyle = {
    color: theme.colors.text,
  }
  return [$nameText, $titleText]
}

function $amountText(isPositive) {
  const $amountText: TextStyle = {
    color: isPositive ? themeColors.background : themeColors.palette.orange100,
  }
  return [$amountText, $titleText]
}
