import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#a533ff",
      main: "#8400ED",
    },
    secondary: {
      main: "#ffffff",
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
)
