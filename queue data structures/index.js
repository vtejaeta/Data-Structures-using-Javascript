class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    ++this.size;
    return this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    let tempNode = this.first;
    if (this.size == 1) {
      this.last = null;
    }

    this.first = tempNode.next;
    this.size--;
    return tempNode.value;
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

q.dequeue(); // 1
q.dequeue(); // 2
q.dequeue(); // 3
q.dequeue(); // 4
q.dequeue(); // 5
q.dequeue(); // null
