# Drupal & Gatsby Demo
- `mkdir drupal`
- `mkdir gatsby`

## Drupal
- `cd drupal`
- `ddev config` (See ddev config example below- use the name *drupalsector*)
- `ddev composer require drupal/gatsby:^2.0.x-dev`
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

# GATSBY Frontend
- `cd gatsby`
- `nvm install 19`
- `nvm use 19`
- `yarn install`
- `yarn setup` (see .env.EXAMPLE)
- `yarn start`

You'll notice that we've set gatbsy develop to use https, and allow connection without a ssl certificate - this is for this local dev demo only! For live preview we need ENABLE_GATSBY_REFRESH_ENDPOINT=true enabled.

```
NODE_TLS_REJECT_UNAUTHORIZED=0 ENABLE_GATSBY_REFRESH_ENDPOINT=true gatsby develop --https
info setting up automatic SSL certificate (may require elevated permissions/sudo)
```

## Are you doing this from Scratch?

clone https://github.com/gatsbyjs/gatsby.git GatsbySource

copy the folder `examples/using-drupal` into your projects `gatbsy` folder

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
