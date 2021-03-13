const { Stack } = require("./Stack/stack");
const { Queue } = require("./Queue/queue");
const { CircularQueue } = require("./CircularQueue/circularqueue");
const { LinkedList } = require("./LinkedList/linkedlist");
const { DoublyLinkedList } = require("./LinkedList/doublylinkedlist");
const { BinarySearchTree } = require("./Tree/BinarySearchTree");

const stack = new Stack({ data: [1, 2, 3, 4] });
const queue = new Queue({ data: [1, 2, 3, 4] });
const circularQueue = new CircularQueue({ data: [1, 2, 3, 4] });
const linkedList = new LinkedList({ head: 1 });
const doublyLinkedList = new DoublyLinkedList({ head: 1 });
const bst = new BinarySearchTree({ root: 8 });
const { root } = bst;
const items = [3, 1, 6, 4, 7, 5, 10, 9, 14];

items.forEach((item) => bst.insert(root, item));

bst.delete(root, 3);
console.log(root);
