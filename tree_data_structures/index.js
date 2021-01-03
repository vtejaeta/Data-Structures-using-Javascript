// Tree data structure allows us to create nodes and N number of children to the child nodes
// Top level node is root node
// Tree representation of Employee structure in an organisation is as follows
//        CEO
//       /   \
//     VP1    VP2
//    /  \    /
//  E1   E2  E3

function Node(data) {
  this.data = data
  this.parent = null
  this.children = []
}

function Tree(data) {
  let node = new Node(data)
  this._root = node
}

function Queue() {
  this.collection = []
  this.enqueue = function (data) {
    this.collection.push(data)
  }
  this.dequeue = function () {
    return this.collection.length ? this.collection.shift() : null
  }
}

// To traverse recursively till deepest child and call callback function
Tree.prototype.traverseDF = function (callback) {
  ;(function recurse(currentNode) {
    for (let i = 0, length = currentNode.children.length; i < length; i++) {
      recurse(currentNode.children[i])
    }
    callback(currentNode)
  })(this._root)
}

// To save children in queue and call callback function with level wise children
Tree.prototype.traverseBF = function (callback) {
  let queue = new Queue()
  queue.enqueue(this._root)
  let currentNode = queue.dequeue()
  while (currentNode) {
    for (let i = 0, length = currentNode.children.length; i < length; i++) {
      queue.enqueue(currentNode.children[i])
    }
    callback(currentNode)
    currentNode = queue.dequeue()
  }
}

// Executes required callback function on every node traversal.
Tree.prototype.contains = function (callback, traversal) {
  traversal.call(this, callback)
}

// To add child node to specified node
Tree.prototype.add = function (data, toData, traversal) {
  let child = new Node(data),
    parent = null,
    callback = function (node) {
      if (node.data == toData) {
        parent = node
      }
    }

  this.contains(callback, traversal)
  if (parent) {
    parent.children.push(child)
    child.parent = parent
  } else {
    throw new Error(`Cannot add node to non existent node`)
  }
}

// To remove node and its children nodes
Tree.prototype.remove = function (data, fromData, traversal) {
  let parent = null,
    childToRemove = null,
    callback = function (node) {
      if (node.data == fromData) {
        parent = node
      }
    }

  this.contains(callback, traversal)
  if (parent) {
    let index = null
    for (let i = 0, length = parent.children.length; i < length; i++) {
      if (parent.children[i].data == data) {
        index = i
      }
    }
    if (index != null) {
      childToRemove = parent.children.splice(index, 1)
    } else {
      throw new Error('Node to remove does not exist')
    }
  }
  return childToRemove
}

let tree = new Tree('CEO')
tree.add('VP1', 'CEO', tree.traverseDF)
tree.add('VP2', 'CEO', tree.traverseBF)
tree.add('C1', 'VP1', tree.traverseBF)
tree.add('C2', 'VP1', tree.traverseBF)
tree.remove('VP1', 'CEO', tree.traverseBF)

tree.contains((node) => {
  console.log(node.data)
}, tree.traverseBF)
