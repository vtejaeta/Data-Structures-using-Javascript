// A Binary Search Tree is non Linear Tree data structure which can have at most two nodes as children to any node with one specific condition. Left node value should be less than value of parent node and the right node value should be greater than value of parent node.
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

// Iterative Solution for functionalities
function BinarySearchTree() {
  this.root = null;

  this.add = function (val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (val === current.value) {
        //   Storing only unique values
        return undefined;
      }
    }

    return this;
  };

  this.find = function (val) {
    if (this.root === null) return false;

    let current = this.root;
    while (current) {
      if (current.value === val) return true;
      else if (val < current.value) {
        if (current.left === null) return false;
        current = current.left;
      } else if (val > current.value) {
        if (current.right === null) return false;
        current = current.right;
      }
    }
  };

  this.min = function () {
    if (this.root === null) return undefined;
    let current = this.root;

    while (current) {
      if (current.left === null) return current.value;
      current = current.left;
    }

    return undefined;
  };

  this.max = function () {
    if (this.root === null) return undefined;
    let current = this.root;
    while (current) {
      if (current.right === null) return current.value;
      current = current.right;
    }

    return undefined;
  };
}

let BST = new BinarySearchTree();

BST.add(10);
BST.add(8);
BST.add(15);
BST.add(6);
BST.add(3);
BST.add(20);
BST.find(10); // true
BST.find(2); // false
BST.find(8); // true
BST.find(4); // false
BST.remove(3);
console.log(BST);
