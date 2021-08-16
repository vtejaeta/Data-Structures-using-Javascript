// Create a data structure Stack that represents k stacks. Implementation of Stack should use only one array, i.e., k stacks should use the same array for storing elements. Following functions must be supported by Stack.

// push(int x, int sn) –> pushes x to stack number ‘sn’ where sn is from 0 to k-1
// pop(int sn) –> pops an element from stack number ‘sn’ where sn is from 0 to k-1

// Idea is to have two seperate arrays, one for storing top of stacks, another for storing the next index to push item.
function Stack(arraySize, stackCount) {
    let collection = [];
    let next = [];
    let top = new Array(stackCount).fill(-1);
    let free = 0;

    for (let i = 0; i < arraySize; i++) {
        i == arraySize - 1 ? next.push(-1) : next.push(i + 1);
    }

    this.push = function (element, stackNo) {
        if (this.isFull()) {
        throw new Error(`Stack is full, cannot push more`);
        }
        let index = free;
        free = next[index];
        next[index] = top[stackNo];
        top[stackNo] = index;
        collection[index] = element;
    };

    this.pop = function (stackNo) {
        if (this.isEmpty()) {
        throw new Error(`Stack is empty, cannot do pop`);
        }

        let index = top[stackNo];
        top[stackNo] = next[index];
        next[index] = free;
        free = index;

        let element = collection[index];
        return element;
    };

    this.isFull = function () {
        return free == -1;
    };

    this.isEmpty = function (stackNo) {
        return top[stackNo] == -1;
    };
  
}
  
let stack = new Stack(10, 3);

stack.push(15, 2);
stack.push(45, 2);

// Let us put some items in stack number 1
stack.push(17, 1);
stack.push(49, 1);
stack.push(39, 1);

// Let us put some items in stack number 0
stack.push(11, 0);
stack.push(9, 0);
stack.push(7, 0);

stack.pop(2);
stack.pop(1);
stack.pop(0);

// Time Complexity:
//      Push operation - O(1)
//      Pop operation - O(1)
// Auxiliary Space: O(n)