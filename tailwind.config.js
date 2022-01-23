const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      violet: colors.violet,
      cyan: colors.cyan,
      blue: colors.blue,
      sky: colors.sky,
      color_1: "#222831",
      color_2: "#393E46",
      color_3: "#00ADB5",
      color_4: "#EEEEEE",
      dark_1:"#041C32",
      dark_2:"#04293A",
      dark_3:"#064663",
      dark_4:"#ECB365"

    },
  },
  plugins: [],
}
