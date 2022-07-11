export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

import React from "react"

import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "@mui/material/styles"
import { withRouter } from 'storybook-addon-react-router-v6'

import muiTheme from "../src/styles/theme"
import { RecoilRoot } from "recoil"

addDecorator((story) => <RecoilRoot><ThemeProvider theme={muiTheme}>{story()}</ThemeProvider></RecoilRoot>)
addDecorator(withRouter)