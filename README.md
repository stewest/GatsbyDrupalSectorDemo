# Drupal & Gatsby Demo

The Drupal repo is at https://github.com/stewest/GatsbyDrupalSectorDemo


And the Gatsby REPO is
https://github.com/stewest/GatsbySectorDemo.git and demo URL on https://gatsbysectordemomaster.gatsbyjs.io/

## Setup

- Install DDEV
-- https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/


## Drupal
- `cd drupal`
- `ddev config` (See ddev config example below- use the name *drupalsector*)
- `ddev composer require drupal/gatsby:^2.0.x-dev` (enable this)
- `ddev composer require jsonapi_menu_items` (enable this) ##TODO##
- `ddev start`
- `ddev drush sqlc < demodb.sql` (if you want to you the demo db)
- `ddev drush uli`

## Enable Drupal Modules:
- If you're using the example demodb.sql this will already be installed.
* Gatsby
* Gatsby JSON:API Extras

### Notice:
  You must enable the Content Moderation, Workflows, JSON:API Extras, JSON:API modules to install Gatsby.
  (I had to enable this via drush to get it to work properly)

Add Preview Webhook URL(s)
`http://localhost:8000/`

Add Preview Webhook URL(s)
`http://host.docker.internal:8000/__refresh`

# GATSBY Frontend
- `cd gatsby`
- `nvm install 19`
- `nvm use 19`
- `yarn install`
- `yarn setup` (see .env.EXAMPLE)
- `yarn start`

You'll notice that we've set gatbsy develop to use http.
To allow connection without a ssl certificate: enable NODE_TLS_REJECT_UNAUTHORIZED=0
(this has proven to be a pain - locally)

For live preview we need ENABLE_GATSBY_REFRESH_ENDPOINT=true enabled.

These vars are in the .env.development file.

Note: for Preview to work locally, we needed to add the following `-H 0.0.0.0` to `gatsby develop`
```
 "develop": "gatsby develop -H 0.0.0.0",
```


## Are you doing this from Scratch?

clone https://github.com/gatsbyjs/gatsby.git GatsbySource

- `mkdir drupal`
- `mkdir gatsby`

- copy the folder `examples/using-drupal` into your projects `gatbsy` folder

```
name: drupalsector
type: drupal9
docroot: web
php_version: "8.1"
webserver_type: nginx-fpm
router_http_port: "80"
router_https_port: "443"
xdebug_enabled: false
additional_hostnames: []
additional_fqdns: []
database:
    type: mariadb
    version: "10.4"
nfs_mount_enabled: false
mutagen_enabled: false
use_dns_when_possible: true
composer_version: "2"
web_environment: []
nodejs_version: "18"
````

# REFERENCES
* https://www.drupal.org/docs/contributed-modules/gatsby-integration/2x-module-setup-guide
* https://www.gatsbyjs.com/plugins/gatsby-source-drupal/
* https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-drupal/
* https://www.gatsbyjs.com/docs/how-to/local-development/running-a-gatsby-preview-server/
