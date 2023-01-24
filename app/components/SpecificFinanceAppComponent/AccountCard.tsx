import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { colors as themeColors, spacing, typography } from "../../theme"
import { Text } from "../Text"
import { SliderCard, SliderCardFooter, SliderCardHeader, SliderCardMain } from "../SliderCard"
import { Button } from "../Button"
import { Icon } from "../Icon"
import { useTheme } from "@react-navigation/native"
import { observer } from "mobx-react-lite"

export interface AccountCardProps {
  accountData: any
  cardWidth: number
}

export const AccountCard = observer(function AccountCard({
  accountData,
  cardWidth,
}: AccountCardProps) {
  const theme = useTheme()

  return (
    <SliderCard style={$sliderCardContainer(theme, cardWidth)}>
      <SliderCardHeader style={$cardContainerHeader}>
        <View>
          <Text text="Current Account" preset="bold" style={$headerTitle(theme)} />
          <Text text={accountData.accountId} preset="bold" style={$headerSubtitle(theme)} />
        </View>
        <Button preset="default" style={$cardButton} textStyle={$text} onPress={() => null}>
          <Icon icon="dots" />
        </Button>
      </SliderCardHeader>

      <SliderCardMain style={$cardContainerMain}>
        <Button
          text="EUR"
          preset="currencyButton"
          style={$cardContainerMainButtonPressed}
          textStyle={$cardContainerMainButtonTextPressed}
        />
        <Button
          text="USD"
          preset="currencyButton"
          style={$cardContainerMainButton(theme)}
          textStyle={$cardContainerMainButtonText(theme)}
        />
        <Button
          text="GBP"
          preset="currencyButton"
          style={$cardContainerMainButton(theme)}
          textStyle={$cardContainerMainButtonText(theme)}
        />
      </SliderCardMain>

      <SliderCardFooter style={$cardContainerFooter}>
        <Text text={accountData.balance.euro} style={$footerTitle(theme)} />
        <Text text="Current balance" style={$footerSubtitle(theme)} />
      </SliderCardFooter>
    </SliderCard>
  )
})

function $sliderCardContainer(theme, cardWidth) {
  const $sliderCardContainer: ViewStyle = {
    width: cardWidth,
    backgroundColor: theme.colors.card,
  }
  return [$cardContainer, $sliderCardContainer]
}
const $cardContainer: ViewStyle = {
  marginHorizontal: 10,
  paddingHorizontal: spacing.medium,
  paddingVertical: spacing.small,
  borderRadius: 25,
}

const $cardContainerHeader: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
}
const $cardButton: ViewStyle = {
  minHeight: 40,
  height: 40,
  width: 40,
  paddingHorizontal: 0,
  paddingVertical: 0,
  backgroundColor: themeColors.palette.orange100,
  borderRadius: 20,
  borderColor: themeColors.palette.orange100,
}

const $text: TextStyle = {
  textAlignVertical: "center",
}

function $headerTitle(theme) {
  const $headerTitle: TextStyle = {
    color: theme.colors.text,
    fontFamily: typography.fonts.montserrat.bold,
    fontSize: 22,
    lineHeight: 26,
  }
  return $headerTitle
}

function $headerSubtitle(theme) {
  const $headerSubtitle: TextStyle = {
    color: theme.dark ? themeColors.palette.darkGrey100 : theme.colors.text,
    fontFamily: typography.fonts.montserrat.semiBold,
    fontSize: 12,
    lineHeight: 16,
  }
  return $headerSubtitle
}

const $cardContainerMain: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
}

const $cardContainerMainButtonTextPressed: TextStyle = {
  color: themeColors.text,
}

const $cardContainerMainButtonPressed: ViewStyle = {
  backgroundColor: themeColors.background,
}

function $cardContainerMainButton(theme) {
  const $cardContainerMainButton: ViewStyle = {
    backgroundColor: theme.colors.card,
  }
  return $cardContainerMainButton
}

function $cardContainerMainButtonText(theme) {
  const $cardContainerMainButtonText: TextStyle = {
    color: theme.dark ? themeColors.palette.darkGrey100 : themeColors.palette.dark100,
  }
  return $cardContainerMainButtonText
}

const $cardContainerFooter: ViewStyle = {
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "100%",
}

function $footerTitle(theme) {
  const $footerTitle: TextStyle = {
    color: theme.colors.text,
    fontFamily: typography.fonts.montserrat.bold,
    fontSize: 34,
    lineHeight: 38,
  }
  return $footerTitle
}

function $footerSubtitle(theme) {
  const $footerSubtitle: TextStyle = {
    color: theme.colors.text,
    fontFamily: typography.fonts.montserrat.normal,
    fontSize: 15,
    lineHeight: 18,
  }
  return $footerSubtitle
}
