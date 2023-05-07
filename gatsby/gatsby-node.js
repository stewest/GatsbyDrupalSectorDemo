// https://www.gatsbyjs.com/plugins/gatsby-source-drupal/
// IF using Gatsby IN a Docker container
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     watchOptions: {
//       aggregateTimeout: 200,
//       poll: 1000,
//       ignored: "**/node_modules",
//     },
//   })
// }

//https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDrupalNodePage(limit: 1000) {
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
    } else if (pathInput == "/home") {
      return "/"
    } else if (pathInput == "/404") {
      return "/404"
    } else if (pathInput == "/403") {
      return "/403"
    } else {
      return
    }
  }

  // Node type Pages
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
