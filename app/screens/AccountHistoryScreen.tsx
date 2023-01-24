import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Header, Screen, ScreenMain, Carousel } from "../components"
import { useNavigation, useTheme } from "@react-navigation/native"
import { typography } from "../theme/typography"
import { RecentTransactionsPanel } from "../components/SpecificFinanceAppComponent/RecentTransactionsPanel"
import { Account, getAllAccounts } from "../services/api"
import { Loading } from "../components/Loading"

export const AccountHistoryScreen: FC<StackScreenProps<AppStackScreenProps<"AccountHistory">>> =
  observer(function AccountHistoryScreen() {
    const theme = useTheme()
    const [accounts, setAccounts] = useState<Array<Account>>()
    const navigation = useNavigation()

    useEffect(() => {
      getAllAccounts().then((response) => setAccounts(response.data.accounts))
    }, [])

    return (
      <Screen style={$root(theme)} preset="auto" contentContainerStyle={$screenContainer}>
        <Header
          titleStyle={$headerTitle}
          title="Account History"
          rightIcon={"gearButton"}
          onRightPress={() => navigation.navigate("Settings")}
        />
        {accounts ? (
          <ScreenMain style={$screenMainContainer}>
            <Carousel data={accounts} />
            <RecentTransactionsPanel transactionsData={accounts[0]?.transactions} />
          </ScreenMain>
        ) : (
          <Loading style={$loadingContainer} />
        )}
      </Screen>
    )
  })

function $root(theme) {
  const $root: ViewStyle = {
    flex: 1,
    backgroundColor: theme.colors.background,
  }
  return $root
}

const $screenContainer: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
}

const $headerTitle: TextStyle = {
  fontFamily: typography.fonts.montserrat.semiBold,
}

const $loadingContainer: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  height: "76%",
}

const $screenMainContainer: ViewStyle = {
  flexDirection: "column",
  height: "76%",
}
