const { Stack } = require("./Stack/stack");
const { Queue } = require("./Queue/queue");
const { CircularQueue } = require("./CircularQueue/circularqueue");

const stack = new Stack([]);
const queue = new Queue([1, 2, 3, 4]);
const circularQueue = new CircularQueue([1, 2, 3, 4]);
