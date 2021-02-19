const store = require('../store');
const Queue = require('../queue/Queue');

const dogs = new Queue();
store.dogs.forEach((dog) => dogs.enqueue(dog));

const dogsService = {
  fetchDogs() {
    return dogs.all();
  },

  fetchDog() {
    return dogs.show();
  },
};

module.exports = dogsService;
