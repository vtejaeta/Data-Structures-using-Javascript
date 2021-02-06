class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    if (this.head) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
    this.length += 1
    return this
  }

  pop() {
    if (!this.head) return undefined
    let current = this.head
    let prev
    while (current.next) {
      prev = current
      current = current.next
    }
    if (prev) {
      prev.next = null
      this.tail = prev
    } else {
      this.head = null
      this.tail = null
    }
    this.length -= 1
    return current
  }

  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    if (currentHead.next) {
      this.head = currentHead.next
    } else {
      this.head = null
      this.tail = null
    }
    this.length--
    return currentHead
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    let count = 0,
      outputNode = this.head
    if (!this.head || index < 0 || index >= this.length) return null
    while (count < index) {
      count++
      outputNode = outputNode.next
    }
    return outputNode
  }

  set(index, val) {
    let current = this.get(index)
    if (!current) return false
    current.val = val
    return true
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index == 0) {
      return this.unshift(val)
    } else if (index == this.length) {
      return this.push(val)
    } else {
      let current = new Node(val),
        prev = this.get(index - 1),
        upcoming = this.get(index)
      current.next = upcoming
      prev.next = current
      this.length++
    }
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null
    if (index == 0) return this.shift()
    if (index == this.length - 1) return this.pop()
    let prev = this.get(index - 1),
      removed = prev.next
    prev.next = removed.next
    this.length--
    return removed
  }

  reverse() {
    if (!this.head) return undefined
    let current = this.head,
      prev = null,
      next
    this.tail = this.head
    while (current != null) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
    return this
  }
}

let list = new SinglyLinkedList()
list.push('Hi')
list.push('How')
list.push('are')
console.log(list.push('you'))
console.log(list.reverse())
