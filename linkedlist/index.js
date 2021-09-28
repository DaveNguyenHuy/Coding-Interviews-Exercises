// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  length = 0;

  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.insertAt(data, 0)
  }

  getFirst() {
    return this.getAt(0)
  }

  getLast() {
    return this.getAt(this.length-1)
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.length);
  }

  getAt(index) {
    let current = 0;
    let node = this.head
    while(node && current < index) {
      current++;
      node = node.next
    }
    return node
  }

  insertLast(data) {
    this.insertAt(data, this.length)
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return this.length--;
    }
    if (index <= 0) {
      this.head = this.head.next;
      return this.length--;
    }
    if (index >= this.length - 1) {
      index = this.length-1;
    }
    const prevNode = this.getAt(index - 1);
    const nextNode = this.getAt(index+1)
    prevNode.next = nextNode;
    this.length--
  }

  insertAt(data, index) {
    if (index <= 0) {
      const node = new Node(data, this.head)
      this.head = node;
      return this.length++
    }
    if (index >= this.length -1) {
      index = this.length; // insert last
    }
    const prevNode = this.getAt(index - 1)
    prevNode.next = new Node(data, prevNode.next)
    this.length++
  }

  forEach(callback) {
    if (!this.head) return;
    let node = this.head
    while(node) {
      callback(node);
      node = node.next
    }
  }

  size() {
    return this.length;
  }

  [Symbol.iterator]() {
    let node = this.head;
    return {
      next() {
        if (node) {
          const value = node;
          node = node.next;
          return {value, done: false}
        }
        return { done: true }
      }
    }
  }
}

module.exports = { Node, LinkedList };
