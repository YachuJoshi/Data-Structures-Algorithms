const { Stack } = require("./Stack/stack");
const { Queue } = require("./Queue/queue");
const { CircularQueue } = require("./CircularQueue/circularqueue");
const { LinkedList } = require("./LinkedList/linkedlist");
const { DoublyLinkedList } = require("./LinkedList/doublylinkedlist");
const { BinarySearchTree } = require("./Tree/BinarySearchTree");
const { AVLTree } = require("./Tree/AVLTree");

const stack = new Stack({ data: [1, 2, 3, 4] });
const queue = new Queue({ data: [1, 2, 3, 4] });
const circularQueue = new CircularQueue({ data: [1, 2, 3, 4] });
const linkedList = new LinkedList({ head: 1 });
const doublyLinkedList = new DoublyLinkedList({ head: 1 });
const bst = new BinarySearchTree({ root: 8 });
const avl = new AVLTree({ root: 14 });
const { root } = avl;

const items = [17, 11, 7, 52, 4, 12];
items.forEach((item) => avl.insert(root, item));

avl.preorder(root);
