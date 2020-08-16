const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/work/)) {
    page.matchPath = "/work/*"
    createPage(page)
  }
}
