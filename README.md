# Drupal & Gatsby Demo

`mkdir drupal`
`mkdir gatsby`

`cd drupal`
`ddev config`
`composer require drupal/gatsby`

`ddev start`

## Enable Drupal Modules:
* Gatsby
* Gatsby JSON:API Extras
### Notice:
  You must enable the Content Moderation, Workflows, JSON:API Extras, JSON:API modules to install Gatsby.


# REFERENCES
* https://www.drupal.org/docs/contributed-modules/gatsby-integration/2x-module-setup-guide
* https://www.gatsbyjs.com/plugins/gatsby-source-drupal/
* https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-drupal/
* https://www.gatsbyjs.com/docs/how-to/local-development/running-a-gatsby-preview-server/

# GATSBY Frontend
`cd gatsby`
`nvm use 19`
`yarn install`
`yarn start`


## Are you doing this from Scratch?

clone https://github.com/gatsbyjs/gatsby.git GatsbySource

copy the folder `examples/using-drupal` into your projects `gatbsy` folder
