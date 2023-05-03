// https://www.gatsbyjs.com/plugins/gatsby-source-drupal/

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: "**/node_modules",
    },
  })
}

//https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDrupalNodePage(limit: 100) {
        edges {
          node {
            id
            title
            path {
              alias
            }
          }
        }
      }
    }
  `)

  const handlePath = (pathInput) => {
    if (pathInput != null) {
      return pathInput
    } else {
      return "/"
    }
  }

  data.allDrupalNodePage.edges.forEach((edge) => {
    const slug = handlePath(edge.node.path?.alias)

    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/nodepage.js`),
      context: {
        slug: slug,
        id: id,
      },
    })
  })
}
