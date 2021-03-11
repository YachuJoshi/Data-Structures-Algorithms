class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor({ head }) {
    this.head = new Node(head);
  }

  unshift(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addAtPos({ data, position }) {
    const newNode = new Node(data);
    let tNode = this.head;

    for (let i = 1; i < position - 1; i++) {
      if (!tNode.next) {
        console.log(`Can't add item at position ${position}`);
        return;
      }
      tNode = tNode.next;
    }
    newNode.next = tNode.next;
    tNode.next = newNode;
  }

  append(data) {
    const newNode = new Node(data);
    let tNode = this.head;

    while (tNode.next !== null) {
      tNode = tNode.next;
    }
    tNode.next = newNode;
  }

  shift() {
    this.head = this.head.next;
  }

  deleteAtPos(position) {
    let tNode = this.head;

    for (let i = 1; i < position - 1; i++) {
      if (!tNode.next) {
        console.log(`Can't remove item at position ${position}`);
        return;
      }
      tNode = tNode.next;
    }
    tNode.next = tNode.next.next;
  }

  truncate() {
    let tNode = this.head;

    while (tNode.next.next) {
      tNode = tNode.next;
    }
    tNode.next = null;
  }

  list() {
    let tNode = this.head;
    while (tNode) {
      console.log(tNode.data);
      tNode = tNode.next;
    }
  }
}

module.exports = {
  LinkedList,
};
