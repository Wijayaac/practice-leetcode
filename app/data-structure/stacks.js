// Using built ins JavaScript array
// const stack = [];

// Adding element into last stack
// stack.push("dog");
// stack.push("cat");
// stack.push("bear");

// See stack before deleting elements
// console.log(stack);

// Deleting elements from last stack elements
// console.log(stack.pop());

// peek method see last element of the stack
// console.log(stack[stack.length - 1]);

// See stack after deleting
// console.log(stack);

// --------------
// Using JavaScript Class
class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }
  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  peek() {
    return this.storage[this.size];
  }
  length() {
    return this.size;
  }
}

const stack = new Stack();

// Add elements into stack
stack.push("bumblebee");
stack.push("optimum prime");
stack.push("kazen");

// See stack elements
console.log(stack);

// Deleting stack last element
console.log(stack.pop());

console.log(stack);
console.log(stack.length());
// See last element of the stack
console.log(stack.peek());
