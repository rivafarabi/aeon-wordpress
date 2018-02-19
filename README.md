[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RWL5M8UDP5ZU8)

# Aeon-Wordpress
Aeon Wordpress - Ionic 3 Wordpress Client
Ver 0.1 Beta

## Features

- Resposive layout
- User login and register
- Push notification
- Comment section
- Bookmark
- Posts, authors, and tags search

## Requirement

- Wordpress site with WP REST API V2 enabled. 
- Wordpress plugins
  * Better REST API Featured Images
  * Category and Taxonomy Image
  * JWT Authentication for WP-API
  * WP REST API - Pure Taxonomies
  * WP REST API - filter fields

## Installation

Clone the project to your folder
````
git clone https://github.com/rivafarabi/aeon-wordpress my-wordpress-app
````

Set `WP_URL` with your Wordpress website URL in src/constants/endpoint.constant.ts
````
const WP_URL = "https://YOUR-WORDPRESS-SITE.com/";
````
Use `ionic serve` to start a local dev server for app testing.


