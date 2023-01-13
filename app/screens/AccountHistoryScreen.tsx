import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Header, Screen, ScreenFooter, Carousel, Icon } from "../components"
import { useNavigation, useTheme } from "@react-navigation/native"
import { NavigationBar } from "../components/NavigationBar"
import { typography } from "../theme/typography"
import { colors as themeColors } from "../theme"
import { RecentTransactionsPanel } from "../components/SpecificFinanceAppComponent/RecentTransactionsPanel"
import { accounts } from "../services/api/mockData"

export const AccountHistoryScreen: FC<StackScreenProps<AppStackScreenProps<"AccountHistory">>> =
  observer(function AccountHistoryScreen() {
    const { colors } = useTheme()
    const navigation = useNavigation()

    return (
      <Screen style={$root(colors)} preset="auto" contentContainerStyle={$screenContainer}>
        <Header
          titleStyle={$headerTitle}
          title="Account History"
          rightIcon={"gearButton"}
          onRightPress={() => null}
        />
        <Carousel data={accounts} />
        <RecentTransactionsPanel transactionsData={accounts[0].transactions} />
        <ScreenFooter style={$footerContainer}>
          <NavigationBar style={$navigationBar(colors)}>
            <Icon icon="wallet" onPress={() => null} />
            <Icon icon="card" onPress={() => null} />
            <Icon
              icon="analytics"
              onPress={() => null}
              color={navigation.isFocused() ? themeColors.background : ""}
            />
            <Icon icon="payments" onPress={() => null} />
          </NavigationBar>
        </ScreenFooter>
      </Screen>
    )
  })

function $root(colors) {
  const $root: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
  }
  return $root
}

const $screenContainer: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
}

const $footerContainer: ViewStyle = {
  height:"12%",
}

function $navigationBar(colors) {
  const $navigationBar: ViewStyle = {
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.card,
    paddingBottom:"4%"
  }
  return $navigationBar
}

const $headerTitle: TextStyle = {
  fontFamily: typography.fonts.montserrat.semiBold,
}
