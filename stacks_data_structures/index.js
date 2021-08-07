// Stack is a linear data structure in which addition or removal of elements follow a particular order i.e. LIFO(Last in First Out) AND FILO(First in Last Out).

// Functions: push(), pop(), peek(), size()
function myStack() {
  this.collection = {}
  this.count = 0

  this.size = function () {
    return this.count
  }

  // Adds value onto end of the stack
  this.push = function (value) {
    this.collection[this.count] = value

    this.count++
    return this.collection
  }

  // Removes and returns value at the end of the stack
  this.pop = function () {
    if (this.count == 0) {
      return undefined
    }

    this.count--
    let result = this.collection[this.count]
    delete this.collection[this.count]
    return result
  }

  this.peek = function () {
    return this.collection[this.count - 1]
  }
}

let newStack = new myStack()
newStack.push('hello')
newStack.push(NaN)
newStack.push(true)
console.log(newStack.push({}))
console.log(newStack.peek())
console.log(newStack.size())
console.log(newStack.pop())
console.log(newStack.peek())


// Question - 1
// Design a stack which, in addition to push and pop, has a function min which returns minimum element? Push, pop and min should all operate in O(1) time.

function Stack() {
  let collection = [];
  let minArray = [];
  let length = 0;

  this.push = function (item) {
    if(minArray.length == 0 || item <= this.min()){
      minArray.push(item);
    }
    collection.push(item);
    length++;

    return length;
  };

  this.pop = function () {
    if (length == 0) throw new Error(`Stack is empty`);
    let poppedElement = collection.pop();
    if(this.min() == poppedElement) minArray.pop();
    length--;

    return poppedElement;
  };

  this.peek = function () {
    if (length == 0) throw new Error(`Stack is empty`);
    return collection[length - 1];
  };

  this.isEmpty = function () {
    return !length;
  };

  this.entries = function () {
    return collection;
  };

  this.size = function () {
    return length;
  };

  this.min = function () {
    if(!minArray.length) throw new Error(`Stack is empty`);
    return minArray[minArray.length-1];
  };
}

let stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(3);
stack.push(6);
stack.push(7);
stack.push(1);
stack.push(9);
stack.min(); // 1
stack.entries(); // [5,2,1,3,6,7,1,9]
stack.pop(); // 9
stack.min(); // 1
stack.pop(); // 1
stack.min(); // 1
console.log(stack.entries());
console.log(stack.min());
