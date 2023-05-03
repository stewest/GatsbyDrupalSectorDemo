// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby with Drupal Sector Example`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        typePrefix: "Drupal",
        apiBase: `api`,
        baseUrl: `https://drupalsector.ddev.site/`,
        concurrentFileRequests: 2,
        basicAuth: {
          username: process.env.DRUPAL_BASIC_AUTH_USERNAME,
          password: process.env.DRUPAL_BASIC_AUTH_PASSWORD,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `schema.gql`,
        exclude: {
          plugins: [`gatsby-source-npm-package-search`],
        },
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
  ],
}
