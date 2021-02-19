const express = require('express')
const json = require('body-parser').json()
const dogsService = require('./dogs-service')

const dogsRouter = express.Router()

dogsRouter
.route('/')
.get((req, res, next) => {
    const doggie = dogsService.fetchDog()
    res.status(200).json(doggie)
})

module.exports = dogsRouter;
