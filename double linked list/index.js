class Node{
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let node  = new Node(val);
    if(!this.head){
      this.head = node;
      this.tail = this.head;
    }else{
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop(){
    let node = this.tail;
    if(!this.head) return undefined;
    if(this.head == this.tail){
      this.head = null;
      this.tail = null;
    }else{
      this.tail = this.tail.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }

  shift(){
    if(!this.head) return null;
    let node = this.head;
    if(this.head == this.tail){
      this.head = null;
      this.tail = null;
    }else{
      this.head = node.next;
      node.next = null;
      this.head.prev = null;
    }
    this.length--;
    return node;
  }

  unshift(val){
    let node = new Node(val);
    if(!this.head){
      this.head = node;
      this.tail = node;
    }else{
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  
}

let list = new DoublyLinkedList();
