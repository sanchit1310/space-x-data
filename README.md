# space-x-boilerplate
A minimal, web server boilerplate in NodeJS using [ExpressJS](https://expressjs.com/) and [express-handlebars](https://github.com/ericf/express-handlebars).

- Serve static files from `/public`
- Use vanilla CSS `public/styles/styles.css`
- Simple `.handlebars` templates and partials from `/views` and `/views/partials`

## No build required
1. Install Node/NPM
2. Clone this repository
3. Install packages - `npm install`
4. Start the server - `npm start`

When running locally, the server will start on `http://localhost:3000/

## Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/teamwethrift/simple-express-handlebars-boilerplate)

Deploy [space-x-data](https://github.com/sanchit1310/space-x-data.git) to Heroku with one click from the Heroku Elements Marketplace.

Alternatively, install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), clone this repo and [create a new app](https://devcenter.heroku.com/articles/creating-apps).

## Environment Variables
-DEVELOPER_NAME
-SPACE_X_FISRST_API
-SPACE_X_YEAR_API
-SPACE_X_LAUNCH_API
-SPACE_X_LANDING_API
