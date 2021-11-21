// Built-in JavaSript array
// const queue = [];

// Adding element into a queue #enque
// queue.push("cat");
// queue.push("dog");
// queue.push("bear");

// Seeing queue elements
// console.log(queue);

// Deleting element from queue #deque - first-item
// console.log(queue.shift());
// console.log(queue);

// Implementing with Class
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    this.tail--;
    return removed;
  }
}

const queue = new Queue();

// Enqueue adding element into queue
queue.enqueue("bumblebee");
queue.enqueue("optimum prime");
queue.enqueue("kazen");

console.log(queue);

// Dequeue remove first element from queue
console.log(queue.dequeue());
console.log(queue);
