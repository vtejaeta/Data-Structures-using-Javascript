// Question
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
  