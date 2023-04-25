# PLAYLIST-API

## Description

It is an API that creates, lists and updates song playlists and songs in public or private mode for authenticated users. It also has the functionality to create and list users and login.

This app was built using TypeScript, Express, Prisma and PostgreSQL.For authentication users we used JWT and for API documentation I used Postman.

## ERD

![ERD-PLAYLIST](https://user-images.githubusercontent.com/61089189/229990018-9356ef63-b3ca-451c-9afc-326415645a6f.png)

## Technologies and programming languages

* **TypeScript** (v. 4.9.4) [Source](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* **Express** (v. 4.18.2)  [Source](https://www.npmjs.com/package/express)
* **Prisma** (v. 4.9.0) [Source](https://www.prisma.io/docs)
* **nodemon** (v. 2.0.20) [Source](https://www.npmjs.com/package/nodemon)
* **cors** (v. 2.8.5) [Source](https://www.npmjs.com/package/cors)
* **dotenv** (v. 16.0.3) [Source](https://www.npmjs.com/package/dotenv)
* **jsonwebtoken** (v. 9.0.0) [Source](https://www.npmjs.com/package/jsonwebtoken)
* **bcrypt** (v. 5.1.0) [Source](https://www.npmjs.com/package/bcrypt)
* **concurently**  (v. 7.6.0) [Source](https://www.npmjs.com/package/concurrently)
* **ts-node**  (v. 10.9.1) [Source](https://www.npmjs.com/package/ts-node)
* **tslib**  (v. 2.4.1) [Source](https://www.npmjs.com/package/tslib)

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

* [Raisa Orellana](https://github.com/Raisa320)
* [Jaqueline Ramos](https://github.com/JaquelineRocio)
* [Gefferson Casasola](https://github.com/Geffrerson7)
