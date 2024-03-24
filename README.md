# Strapi-fly

Test project to check compatibility between Strapi(using Postgres in prod and node v14) and Fly.io.
DB connection string works with no build errors using this config 🥳

## Fly.io commands

```sh
$fly launch (to create an app)
$fly secrets set SECRET=SECRET_HERE(for env vars, there will be prod errors if this is not set for Strapi's default env vars)
$fly pg create (to create a postgres instance)
$fly deploy (to deploy app)
```

- Set and expose port `3000`. (Fly.io's default now).

## NB

- Won't allow you to update to `strapi@latest` if node version is incompatible with `engine` in `package.json`
