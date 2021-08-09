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
