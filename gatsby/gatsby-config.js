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
        apiBase: `api`,
        typePrefix: "Drupal",
        fastBuilds: true,
        baseUrl: process.env.DRUPAL_BASE_URL,
        basicAuth: {
          username: process.env.DRUPAL_BASIC_AUTH_USERNAME,
          password: process.env.DRUPAL_BASIC_AUTH_PASSWORD,
        },
        // headers: {
        //   "api-key": process.env.JSON_API_KEY,
        // },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
