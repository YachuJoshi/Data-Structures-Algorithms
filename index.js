const { Stack } = require("./Stack/stack");
const { Queue } = require("./Queue/queue");
const { CircularQueue } = require("./CircularQueue/circularqueue");
const { LinkedList } = require("./LinkedList/linkedlist");
const { DoublyLinkedList } = require("./LinkedList/doublylinkedlist");

const stack = new Stack({ data: [1, 2, 3, 4] });
const queue = new Queue({ data: [1, 2, 3, 4] });
const circularQueue = new CircularQueue({ data: [1, 2, 3, 4] });
const linkedList = new LinkedList({ head: 1 });
const doublyLinkedList = new DoublyLinkedList({ head: 1 });
