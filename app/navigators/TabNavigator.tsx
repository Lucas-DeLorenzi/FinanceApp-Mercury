import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps, useTheme } from "@react-navigation/native"
import React from "react"
import { Dimensions, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { CardsScreen, DashBoardScreen, AccountHistoryScreen, PaymentsScreen } from "../screens"
import { colors as themeColors } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

const SCREEN_HEIGHT = Dimensions.get("window").height
const SCREEN_MARGIN_BOTTOM = SCREEN_HEIGHT * 0.12

export type DemoTabParamList = {
  Dashboards: undefined
  Cards: undefined
  AccountHistory: undefined
  Payments: undefined
}

export type DemoTabScreenProps<T extends keyof DemoTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DemoTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<DemoTabParamList>()

export function TabNavigator() {
  const { bottom } = useSafeAreaInsets()
  const { colors } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar(bottom, colors)],
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Dashboards"
        component={DashBoardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="wallet" color={focused && themeColors.background} />
          ),
        }}
      />

      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="card" color={focused && themeColors.background} />
          ),
        }}
      />

      <Tab.Screen
        name="AccountHistory"
        component={AccountHistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="analytics" color={focused && themeColors.background} />
          ),
        }}
      />

      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="payments" color={focused && themeColors.background} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function $tabBar(bottom, colors) {
  const $tabBar: ViewStyle = {
    height: bottom + SCREEN_MARGIN_BOTTOM,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.card,
    borderTopColor: colors.transparent,
  }
  return $tabBar
}
