const Queue = require('../queue/Queue');
const store = require('../store');

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

const peopleService = {
  fetchPeople() {
    return people.all();
  },
  enqueuePerson(person) {
    return people.enqueue(person.name);
  },
  dequeuePerson() {
    people.dequeue();
    return people;
  },
};

module.exports = peopleService;
