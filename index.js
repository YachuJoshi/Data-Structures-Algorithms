const { Stack } = require("./Stack/stack");

const stack = new Stack([1, 2, 3, 4, 5, 6]);

stack.push(7);
stack.push(8);

console.log(stack.isFull());

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.list());

console.log(stack.size());
