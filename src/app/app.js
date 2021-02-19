const express = require('express');
const cors = require('cors');
const config = require('../config');
const morgan = require('morgan');
const dogsRouter = require('../dogs/dogs-router')
const catsRouter = require('../cats/cats-router')
const peopleRouter = require('../people/people-router')

const app = express();

app.use(
  cors({
    origin: config.CLIENT_ORIGIN,
  })
);

app.use(
    morgan(config.NODE_ENV === 'production' ? 'tiny' : 'common', {
      skip: () => config.NODE_ENV === 'test'
    })
  );

app.use('/api/cats', catsRouter);
app.use('/api/dogs', dogsRouter);
app.use('/api/people', peopleRouter);

module.exports = app;
