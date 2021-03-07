class Stack {
  constructor(data) {
    this.stack = [];
    this.top = -1;
    this.length = 10;
    this.createStack(data);
  }

  createStack(data) {
    if (Array.isArray(data)) {
      this.stack = [...data];
      this.top = this.stack.length - 1;
    } else {
      throw new Error("Data needs to be an array/list.");
    }
  }

  isEmpty() {
    return this.top === -1 && this.top < this.length - 1;
  }

  isFull() {
    return this.top >= this.length - 1;
  }

  push(item) {
    const { stack } = this;
    if (this.isFull()) {
      throw new Error("Stack is full");
    } else {
      stack.push(item);
      this.top++;
    }
  }

  pop() {
    const { stack } = this;
    if (this.isEmpty()) {
      throw new Error("Stack is empty.");
    } else {
      const lastElement = stack.pop();
      this.top--;
      return lastElement;
    }
  }

  peek() {
    return this.stack[this.top];
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
