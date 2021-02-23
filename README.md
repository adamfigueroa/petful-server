# Petful API | Node.js/Express

- Live Link to API: https://petful-server-challenge.herokuapp.com/

- Link to front end client: https://petful-client-beige-three.vercel.app/
- Link to front end client Repo: https://github.com/adamfigueroa/petful-client



## About Petful

This server is built using Node.js/Express with the purpose of being the API for the Petful Client which allows Users to join an adoption queue and pick an available pet when their turn is up.

## Documentation

### Endpoints

#### People Endpoint

`POST /api/people`

| Body Key     | Type     | Description                         |
| :----------- | :------- | :---------------------------------- |
| `name`       | `string` |      Name is required          


#### Cat Endpoint

- Get Cat
`GET /api/cats`

#### Dog Endpoint

- Get Dog
`GET /api/dogs`

### Status Codes

This API returns the following status codes:

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |

### Technology Used

- Node.js
- Express

#### To install locally

- Clone the github repo to your machine.
- Run 'npm install' in git
- Run 'npm start'