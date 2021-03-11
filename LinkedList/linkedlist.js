class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(headData) {
    this.head = new Node(headData);
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
      if (tNode.next === null) {
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

  list() {
    let tNode = this.head;
    while (tNode !== null) {
      console.log(tNode.data);
      tNode = tNode.next;
    }
  }
}

module.exports = {
  LinkedList,
};
