const { Stack } = require("./Stack/stack");
const { Queue } = require("./Queue/queue");
const { CircularQueue } = require("./CircularQueue/circularqueue");
const { LinkedList } = require("./LinkedList/linkedlist");

const stack = new Stack({ data: [1, 2, 3, 4] });
const queue = new Queue({ data: [1, 2, 3, 4] });
const circularQueue = new CircularQueue([1, 2, 3, 4]);
const linkedList = new LinkedList(1);

linkedList.append(5);
linkedList.append(6);
linkedList.append(8);

linkedList.addAtPos({ data: 10, position: 2 });
linkedList.list();
