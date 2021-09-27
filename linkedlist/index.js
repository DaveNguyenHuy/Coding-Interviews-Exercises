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
    this.head = new Node(data, this.head)
    this.length++
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let last = this.head
    while (last && last.next) {
      last = last.next
    }
    return last
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next
      this.length--
    }
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null
    } else {
      const prevOfLast = this.getAt(this.length - 2);
      prevOfLast.next = null;
    }
    this.length--;
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
    if (!this.head) {
      return this.insertFirst(data)
    }
    const tail = this.getAt(this.length - 1)
    tail.next = new Node(data, null)
    this.length++
  }

  removeAt(index) {
    if (!this.head) {
      return
    }
    if (index <= 0) {
      return this.removeFirst()
    }
    if (index >= this.length - 1) {
      return this.removeLast()
    }
    const prevNode = this.getAt(index - 1);
    const nextNode = this.getAt(index+1)
    prevNode.next = nextNode;
    this.length--
  }

  insertAt(data, index) {
    if (index <= 0) {
      return this.insertFirst(data)
    }
    if (index >= this.length -1) {
      return this.insertLast(data)
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
