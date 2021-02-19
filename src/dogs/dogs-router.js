const express = require('express')
const dogsService = require('./dogs-service')

const dogsRouter = express.Router()

dogsRouter
.route('/')
.get((req, res, next) => {
    const doggie = dogsService.fetchDog()
    res.status(200).json(doggie)
})
.delete((req, res, next) => {
    dogsService.adoptDog();
    res.status(200).end();
})

module.exports = dogsRouter;
