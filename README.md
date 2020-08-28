## Monorepo

This project uses Lerna as monorepo.

Run `npm install --global lerna` to install it globally.

## Frontend

This project uses Angular7+ in the frontend.

Run `npm install -g @angular/cli` to install it globally

## Backend

This project uses NestJS framework for Node backend.

Run `npm i -g @nestjs/cli` to install it globally.

Run `cp projects/backend/.env.sample projects/backend/.env` to create an environment configuration file.

> **Docker**
>
> The backend uses docker for creating the database. If you don't have it installed yet, please check [Docker Installation](https://docs.docker.com/engine/install/).
>
> Alternatively, run the script below for quick & easy install via:
>
> ```bash
> $ curl -fsSL https://get.docker.com -o get-docker.sh
> $ sh get-docker.sh
> ```
