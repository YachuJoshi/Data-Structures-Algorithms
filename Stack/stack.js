class Stack {
  constructor({ data, maxLength = 10 }) {
    this.stack = [];
    this.length = maxLength;
    this.createStack(data);
  }

  createStack(data) {
    if (Array.isArray(data)) {
      this.stack = data.slice(0, this.length);
    } else {
      throw new Error("Data needs to be an array/list.");
    }
  }

  get top() {
    return this.stack.length - 1;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  isFull() {
    return this.stack.length >= this.length;
  }

  push(item) {
    if (this.isFull()) {
      throw new Error("Stack is full");
    } else {
      this.stack.push(item);
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty.");
    } else {
      return this.stack.pop();
    }
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  list() {
    return this.stack;
  }

  size() {
    return this.stack.length;
  }
}

module.exports = {
  Stack,
};
