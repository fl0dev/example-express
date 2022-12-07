# FL0 Example Repo: ExpressJS + Sequelize
This repo demonstrates how to set up an ExpressJS app, deploy it to [FL0](fl0.com) and connect it to a database using Sequelize. This app has a single endpoint that will return a random quote and author.

You can find a Quickstart guide for this example repo in [FL0's documentation](https://docs.fl0.com/fl0-documentation/quickstarts/express)

## Prerequisites
1. NodeJS + NPM installed
2. A fork of this repo in your own Github org
3. A FL0 project with Postgres database


## Getting started
1. `npm install` to install all dependencies
2. Rename `.env.example` to `.env` and replace the `DATABASE_URL` variable with connection details from your FL0 database
3. `npm run bootstrap` to set up the database schema and load sample data
4. `npm run start:dev` to run a local server that will automatically reload when you make changes

You will be able to see your app running at http://localhost:3000/

## Folder structure
 - `.env` Environment variables that will be loaded into your app at runtime. This is only used for local dev
 - `src/models` Sequelize models for Quotes and Authors are defined in here. The index file dynamically loads the files
 - `src/scripts` Utility scripts that are called from the `npm run` commands
 - `src/seeders` Seed files responsible for populating the database with sample data
 - `src/app.js` The entrypoint for the app, contains the setup for Express and the logic for the routes
 - `src/db.json` The Sequelize configuration file, telling Sequelize how to connect to the DB in different environments

## Deploying to FL0
Follow the [instructions](https://docs.fl0.com/fl0-documentation/quickstarts/express) to connect your repo to FL0. Every time you push a commit to the `main` branch, FL0 will build and deploy your app.