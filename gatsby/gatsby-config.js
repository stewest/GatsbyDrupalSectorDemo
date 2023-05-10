// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log("baseUrl: ", process.env.DRUPAL_BASE_URL)
console.log("basic auth User: ", process.env.DRUPAL_BASIC_AUTH_USERNAME)

module.exports = {
  siteMetadata: {
    title: `Gatsby with Drupal Sector Example`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        typePrefix: "Drupal",
        apiBase: `jsonapi`,
        baseUrl: process.env.DRUPAL_BASE_URL,
        concurrentFileRequests: 10,
        fastBuilds: true,
        basicAuth: {
          username: process.env.DRUPAL_BASIC_AUTH_USERNAME,
          password: process.env.DRUPAL_BASIC_AUTH_PASSWORD,
        },
        headers: {
          "api-key": process.env.APIKEY,
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
    // {
    //   resolve: `gatsby-source-drupal-menu-links`,
    //   options: {
    //     typePrefix: "Drupal",
    //     baseUrl: process.env.DRUPAL_BASE_URL,
    //     apiBase: `jsonapi`, // optional, defaults to `jsonapi`
    //     menus: ["main", "main-menu", "account"], // Which menus to fetch, there are the menu IDs.
    //   },
    // },
  ],
}
