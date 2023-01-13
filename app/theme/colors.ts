// TODO: write documentation for colors and palette in own markdown file and add links from here
import type { Theme } from "@react-navigation/native"

const palette = {
  light100: "#FFFFFF",
  light200: "#FEFEFE",

  dark100: "#16110D",
  dark200: "#2F2E33",

  lightGrey100: "#C4C4C4",
  lightGrey200: "#DCDCDC",

  darkGrey100: "#646464",

  orange100: "#F76654",
  orange200: "#fa9285",

  blueViolet100: "#523CF8",
  blueViolet200: "#7c6bfa",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  palette,

  transparent: "rgba(0, 0, 0, 0)",

  text: palette.light100,
  darkText: palette.dark100,
  background: palette.blueViolet100,
  darkBackground: palette.dark100,
  tint: palette.blueViolet100,

  error: palette.angry500,
  errorBackground: palette.angry100,
}

export const DefaultThemeColors: Theme = {
  dark: false,
  colors: {
    primary: palette.dark100,
    background: palette.blueViolet100,
    card: palette.light100,
    text: palette.dark100,
    border: palette.light100,
    notification: palette.orange100,
  },
}

export const DarkThemeColors: Theme = {
  dark: true,
  colors: {
    primary: palette.light200,
    background: palette.dark100,
    card: palette.dark200,
    text: palette.light200,
    border: palette.dark200,
    notification: palette.orange100,
  },
}
