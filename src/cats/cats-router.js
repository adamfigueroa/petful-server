const express = require('express')
const json = require('body-parser').json()
const catsService = require('./cats-service')

const catsRouter = express.Router()

catsRouter
.route('/')
.get((req, res, next) => {
    const kitty = catsService.fetchCat()
    res.status(200).json(kitty)
})

module.exports = catsRouter;
