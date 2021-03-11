class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor({ head }) {
    this.head = new Node(head);
  }

  unshift(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    tNode.next.prev = newNode;
    newNode.next = tNode.next;
    newNode.prev = tNode;
    tNode.next = newNode;
  }

  append(data) {
    const newNode = new Node(data);
    let tNode = this.head;

    while (tNode.next) {
      tNode = tNode.next;
    }
    tNode.next = newNode;
    newNode.prev = tNode;
  }

  shift() {
    this.head = this.head.next;
    this.head.prev = null;
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
    tNode.next.prev = tNode;
  }

  truncate() {
    let tNode = this.head;

    while (tNode.next.next) {
      tNode = tNode.next;
    }
    tNode.next.prev = null;
    tNode.next = null;
  }

  listForward() {
    let tNode = this.head;
    while (tNode) {
      console.log(tNode.data);
      tNode = tNode.next;
    }
  }

  listBackward() {
    let tNode = this.head;
    while (tNode.next) {
      tNode = tNode.next;
    }
    while (tNode) {
      console.log(tNode.data);
      tNode = tNode.prev;
    }
  }
}

module.exports = {
  DoublyLinkedList,
};
