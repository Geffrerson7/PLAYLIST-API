# Proyecto-Unidad-7

REST API with typescript, Express and Prisma.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`PORT`

`JWT_SECRET`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Geffrerson7/Proyecto-Unidad-7.git
```

Go to the project directory

```bash
  cd Proyecto-Unidad-7
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

## API Reference

### Enpoints description

#### Create user

```http
  POST /api/v1/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. User Name|
| `email` | `string` | **Required**. User email|
| `password` | `string` | **Required**. User password|
| `date_born` | `date` | **Required**. User born date |

#### Login

```http
  POST /api/v1/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. User email|
| `password` | `string` | **Required**. User password|

#### Create song

```http
  POST /api/v1/songs
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Song name|
| `artist` | `string` | **Required**. Artist name|
| `album` | `string` | **Required**. Album name|
| `year` | `int` | **Required**. Release year|
| `genre` | `string` | **Required**. Music genre|
| `duration` | `int` | **Required**. Playback time in minutes|
| `isPrivate` | `boolean` | **Required**. Song private status|

#### List songs 

```http
  GET /api/v1/songs
```

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required only to see private songs**. Authorization token|

#### Read one song 

```http
  GET /api/v1/songs/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `int` | **Required**. Song id|

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required only to see private songs**. Authorization token|

#### Create playlist

```http
  POST /api/v1/playlist
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Playlist name|
| `user_id` | `int` | **Required**. User id|
| `songs` | `list` | **Optional**. List of new songs|

#### Add a song to a playlis

```http
  PUT /api/v1/playlist/add-song
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id_song` | `int` | **Required**. Playlist id|
| `id_playlist` | `int` | **Required**. Song id|

#### List user playlists

```http
  GET /api/v1/playlist/user/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `int` | **Required**. User id|

## Authors

- [Raisa Orellana](https://github.com/Raisa320)
- [Jaqueline Ramos](https://github.com/JaquelineRocio)
- [Gefferson Casasola](https://github.com/Geffrerson7)
