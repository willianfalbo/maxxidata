## Maxxidata

Coding Exercise / Technical Challenge.

## Stack

This project uses:

- [Lerna](https://lerna.js.org/) as monorepo.
- [Angular 7+](https://angular.io/) in the frontend.
- [Nest.js](https://nestjs.com/) as the backend Node.js framework.
- [Postgres](https://www.postgresql.org/) as the SQL database.

## Quick Start

> **Node.js**: Before starting, please make sure you have [Node](https://nodejs.org/en/) installed on your machine.

1. Initial steps:

   ```bash
   # 1. install lerna, angular cli and nestjs globally
   $ npm i -g lerna @angular/cli @nestjs/cli

   # 2. create a '.env' file in the backend project
   $ npm run copy:env

   # 3. install packages and link any cross-dependencies
   $ lerna bootstrap
   ```

2. Create a Postgres database called 'maxxidata' (or any name you like).

   > **Tip**: You could run the following command if you have [Docker](https://docs.docker.com/engine/install) installed. It will create a container for Postgres. The database name must be created manually.
   >
   > ```bash
   > $ npm run docker:db
   > ```

   > **Important**: Please make sure your `.env` file is configured properly for Postgres. It is located on `(projects > backend > .env)`. The default configurations are:
   >
   > ```
   > DB_HOST=localhost
   > DB_PORT=5432
   > DB_USER=postgres
   > DB_PASSWORD=password
   > DB_NAME=maxxidata
   > ```

3. Final steps:

   ```bash
   # run the database migrations to create the tables and hardcode data
   $ npm run typeorm:run

   # start the backend/frontend server simultaneously
   $ npm run start:dev
   ```

## Unit Tests

Run the commands below for unit testing backend/frontend simultaneously:

```bash
# run unit test only
$ npm run test

# test coverage
$ npm run test:cov
```
