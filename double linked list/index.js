class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
  }

  pop() {
    let node = this.tail
    if (!this.head) return undefined
    if (this.head == this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      node.prev = null
    }
    this.length--
    return node
  }

  shift() {
    if (!this.head) return null
    let node = this.head
    if (this.head == this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = node.next
      node.next = null
      this.head.prev = null
    }
    this.length--
    return node
  }

  unshift(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let count, current
    if (index <= this.length / 2) {
      count = 0
      current = this.head
      while (count != index) {
        count++
        current = current.next
        console.log('--From Start--')
      }
    } else {
      count = this.length - 1
      current = this.tail
      while (count != index) {
        count--
        current = current.prev
        console.log('--From End--')
      }
    }
    return current
  }

  set(index, val) {
    if (index < 0 || index >= this.length) return false
    let node = this.get(index)
    node.val = val
    return true
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index == 0) return !!this.unshift(val)
    if (index == this.length) return !!this.push(val)
    let node = new Node(val),
      prev = this.get(index - 1),
      upcoming = prev.next
    prev.next = node
    node.prev = prev
    node.next = upcoming
    upcoming.prev = node
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null
    if (index == 0) return this.shift()
    if (index == this.length - 1) return this.pop()
    let prev = this.get(index - 1),
      node = prev.next,
      upcoming = node.next
    prev.next = upcoming
    upcoming.prev = prev
    node.next = null
    node.prev = null
    this.length--
    return node
  }

  reverse() {
    if (!this.head) return null
    let previous = null,
      current = this.head,
      upcoming = current.next
    this.tail = current
    while (upcoming) {
      current.next = previous
      if (previous) previous.prev = current
      previous = current
      current = upcoming
      upcoming = upcoming.next
    }
    if (current) {
      current.next = previous
      previous.prev = current
      current.prev = null
    }
    this.head = current
    return this
  }
}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
console.log(list.reverse())
