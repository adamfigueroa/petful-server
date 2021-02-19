const express = require('express')
const catsService = require('./cats-service')

const catsRouter = express.Router()

catsRouter
.route('/')
.get((req, res, next) => {
    const kitty = catsService.fetchCat()
    res.status(200).json(kitty)
})
.delete((req, res, next) => {
    catsService.adoptCat();
    res.status(200).end();
})

module.exports = catsRouter;
