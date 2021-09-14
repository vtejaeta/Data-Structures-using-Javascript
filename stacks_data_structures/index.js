// Stack is a linear data structure in which addition or removal of elements follow a particular order i.e. LIFO(Last in First Out) AND FILO(First in Last Out).

// Functions: push(), pop(), peek(), size()
function myStack() {
  this.collection = {};
  this.count = 0;

  this.size = function () {
    return this.count;
  };

  // Adds value onto end of the stack
  this.push = function (value) {
    this.collection[this.count] = value;

    this.count++;
    return this.collection;
  };

  // Removes and returns value at the end of the stack
  this.pop = function () {
    if (this.count == 0) {
      return undefined;
    }

    this.count--;
    let result = this.collection[this.count];
    delete this.collection[this.count];
    return result;
  };

  this.peek = function () {
    return this.collection[this.count - 1];
  };
}

let newStack = new myStack();
newStack.push("hello");
newStack.push(NaN);
newStack.push(true);
console.log(newStack.push({}));
console.log(newStack.peek());
console.log(newStack.size());
console.log(newStack.pop());
console.log(newStack.peek());

// Stack implementation using Singly Linked List
// Approach : Push elements onto start of Singly Linked List and pop elements off from start.
function Node(val) {
  this.value = val;
  this.next = null;
}

function Stack() {
  this.first = null;
  this.last = null;
  this.size = 0;

  this.push = function (val) {
    let newNode = new Node(val);

    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    ++this.size;
    return this.size;
  };

  this.pop = function () {
    if (!this.first) return null;
    let tempNode = this.first;
    if (this.size == 1) {
      this.last = null;
    }
    this.first = this.first.next;
    --this.size;
    return tempNode.value;
  };
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop(); // 4
stack.pop(); // 3
stack.pop(); // 2
stack.pop(); // 1
stack.pop(); // null
