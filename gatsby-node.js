const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/work/)) {
    page.matchPath = "/work/*"
    createPage(page)
  }
}
