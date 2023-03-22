# PLAYLIST-API

This app was built using TypeScript, Express, Prisma and PostgreSQL. You are able to create users, songs and playlists. Also authenticated users will have access to private songs. For authentication users we used JWT and for API documentation I used Postman.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`PORT`

`JWT_SECRET`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Geffrerson7/PLAYLIST-API.git
```

Go to the project directory

```bash
  cd PLAYLIST-API
```

Install dependencies

```bash
  npm install
```

Install dist directory

```bash
  npx tsc
```

Make migrations

```bash
  npx prisma migrate dev
```

Run project

```bash
  npm run dev
```

## API Documentation
[Postman documentation link](https://documenter.getpostman.com/view/24256278/2s93Jxs1uJ) 
## Authors

- [Raisa Orellana](https://github.com/Raisa320)
- [Jaqueline Ramos](https://github.com/JaquelineRocio)
- [Gefferson Casasola](https://github.com/Geffrerson7)
