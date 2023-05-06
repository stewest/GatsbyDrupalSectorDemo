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
        fastBuilds: true,
        basicAuth: {
          username: process.env.DRUPAL_BASIC_AUTH_USERNAME,
          password: process.env.DRUPAL_BASIC_AUTH_PASSWORD,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
  ],
}
