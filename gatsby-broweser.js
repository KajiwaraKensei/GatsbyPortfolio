import React from "react"

import ThemeProvider from "./src/wrap-with-provider"

export const wrapRootElement = ({ element }) => {
  console.log("hoge")

  return <ThemeProvider>{element}</ThemeProvider>
}
