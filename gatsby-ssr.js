const React = require("react")
const ThemeProvider = require("./src/wrap-with-provider")

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
