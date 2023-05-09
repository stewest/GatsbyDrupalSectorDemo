// https://www.gatsbyjs.com/plugins/gatsby-source-drupal/
// IF using Gatsby IN a Docker container
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: "**/node_modules",
    },
  })
}

const handlePath = (pathInput, nid) => {
  if (pathInput != null) {
    return pathInput
  } else if (pathInput === "/home") {
    return "/"
  } else if (pathInput === "/404") {
    return "/404"
  } else if (pathInput === "/403") {
    return "/403"
  } else {
    return `/node/${nid}`
  }
}

//https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      pages: allDrupalNodePage(limit: 100) {
        edges {
          node {
            drupal_internal__nid
            id
            title
            path {
              alias
            }
          }
        }
      }
      articles: allDrupalNodeArticle(limit: 100) {
        edges {
          node {
            id
            title
            path {
              alias
            }
            drupal_internal__nid
          }
        }
      }
    }
  `)

  // Use a template to build out all Node type 'Pages'.
  data.pages.edges.forEach((edge) => {
    const slug = handlePath(
      edge.node.path.alias,
      edge.node.drupal_internal__nid
    )

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

  // Use a template to build out all Node type 'Pages'.
  data.articles.edges.forEach((edge) => {
    const slug = handlePath(
      edge.node.path.alias,
      edge.node.drupal_internal__nid
    )

    const id = edge.node.id

    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/nodearticle.js`),
      context: {
        slug: slug,
        id: id,
      },
    })
  })
}
