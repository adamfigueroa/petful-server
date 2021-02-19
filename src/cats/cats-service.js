const store = require('../store');
const Queue = require('../queue/Queue');

const cats = new Queue();
store.cats.forEach((cat) => cats.enqueue(cat));

const catsService = {
  fetchCats() {
    return cats.all();
  },

  fetchCat() {
    return cats.show();
  },
  adoptCat() {
    cats.dequeue();
    return cats
  }
};

module.exports = catsService;
