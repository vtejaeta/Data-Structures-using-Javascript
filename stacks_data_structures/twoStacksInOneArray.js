// Question
// Your task is to implement  2 stacks in one array efficiently.

// Input:
// push1(2)
// push1(3)
// push2(4)
// pop1()
// pop2()
// pop2()

// Output:
// 3 4 -1

// Explanation:
// push1(2) the stack1 will be {2}
// push1(3) the stack1 will be {2,3}
// push2(4) the stack2 will be {4}
// pop1()   the poped element will be 3
// from stack1 and stack1 will be {2}
// pop2()   the poped element will be 4
// from stack2 and now stack2 is empty
// pop2()   the stack2 is now empty hence -1 .

// Approach - 1
// Divide array into two halves and start pushing elements towards start and end of array;
// Problem with this approach: - Array space is not effeciently used, stack can get overflow or undeflow even if there is space left up in it.
function twoStacksInOneArray(size) {
  if (size == null)
    throw new Error("Please provide stack size to proceed further");
  let stack = new Array(size);
  let top1 = Math.floor(size / 2);
  let top2 = top1 + 1;

  this.push1 = function push1(element) {
    if (top1 == -1) {
      console.log(`Stack oveflow by element ${element}`);
    } else {
      stack[top1] = element;
      top1--;
    }
  };

  this.push2 = function push2(element) {
    if (top2 == size) {
      console.log(`Stack oveflow by element ${element}`);
    } else {
      stack[top2] = element;
      top2++;
    }
  };

  this.pop1 = function pop1() {
    if (top1 + 1 == Math.floor(size / 2) + 1) {
      console.log("Stack underflow");
    } else {
      top1++;
      let element = stack[top1];
      delete stack[top1];
      return element;
    }
  };

  this.pop2 = function pop2() {
    if (top2 - 1 == Math.floor(size / 2)) {
      console.log("Stack underflow");
    } else {
      top2--;
      let element = stack[top2];
      delete stack[top2];

      return element;
    }
  };

  this.entries = function () {
    return stack;
  };
}

let stack = new twoStacksInOneArray(5);
stack.push1(5);
stack.push2(10);
stack.push2(15);
stack.push1(11);
stack.push2(7);
console.log(stack.entries());
console.log(stack.pop1());
console.log(stack.push2(40));
console.log(stack.pop2());

// Time Complexity:
//      Push operation - O(1)
//      Pop operation - O(1)
// Auxiliary Space: O(n)
// Use of an array to implement stack so. It is not space optimised method

// Approach  - 2 (Space effecient implementation)
// Idea is to start two stacks from two extreme corners. For overflow we should check for space between top elements of both stacks
function twoStacksInOneArrayEffecientOne(size) {
  if (size == null)
    throw new Error("Please provide stack size to proceed further");
  let stack = new Array(size);
  let top1 = 0;
  let top2 = size - 1;

  this.push1 = function push1(element) {
    if (stack[top1]) {
      console.log(`Stack is overflow`);
    } else {
      stack[top1] = element;
      top1++;
    }
  };

  this.push2 = function push2(element) {
    if (stack[top2]) {
      console.log(`Stack is overflow`);
    } else {
      stack[top2] = element;
      top2--;
    }
  };

  this.pop1 = function pop1() {
    if (top1 == 0) {
      console.log("Stack underflow");
    } else {
      top1--;
      let element = stack[top1];
      delete stack[top1];
      return element;
    }
  };

  this.pop2 = function pop2() {
    if (top2 + 1 == size) {
      console.log("Stack underflow");
    } else {
      top2++;
      let element = stack[top2];
      delete stack[top2];
      return element;
    }
  };

  this.entries = function () {
    return stack;
  };
}

let stack1 = new twoStacksInOneArrayEffecientOne(5);
stack1.push1(5);
stack1.push2(10);
stack1.push2(15);
stack1.push1(11);
stack1.push2(7);
console.log(stack1.entries());
console.log(stack1.pop1());
stack1.push2(40);
console.log(stack1.pop2());
