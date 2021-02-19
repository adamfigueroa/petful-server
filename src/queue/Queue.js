class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const newNode = new _Node(data);
    if (this.first === null) this.first = newNode;
    if (this.last) this.last.next = newNode;
    this.last = newNode;
  }

  dequeue() {
    // Remove some data from the queue.
    if (!this.first) return null;
    const node = this.first.value;
    if (this.first.next === null) this.last = null;
    this.first = this.first.next;
    return node;
  }

  isEmpty() {
    if (this.first === null) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    // Return the next item in the queue.
    if (!this.first) {
      return null;
    }
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    let pets = [];
    let currNode = this.first;

    if (currNode === null) {
      return;
    }

    while (currNode !== null) {
      pets.push(currNode.value);
      currNode = currNode.next;
    }
    return pets;
  }
}

module.exports = Queue;
