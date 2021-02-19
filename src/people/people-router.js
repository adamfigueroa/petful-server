const express = require('express');
const peopleService = require('./people-service');
const json = require('body-parser').json();

const peopleRouter = express.Router();

peopleRouter
  .route('/')
  .get((req, res, next) => {
    const people = peopleService.fetchPeople();
    res.status(200).json(people);
  })
  .post(json, (req, res, next) => {
    const { name } = req.body;
    const person = { name };
    const newPerson = peopleService.enqueuePerson(person);
    res.status(201).json(newPerson);
  })
  .delete((req, res, next) => {
    peopleService.dequeuePerson();
    res.status(200).end();
  });

module.exports = peopleRouter;
