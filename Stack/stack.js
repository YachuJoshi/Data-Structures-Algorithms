class Stack {
  constructor(data) {
    this.data = [...data];
    this.stack = [];
    this.top = -1;
    this.length = 10;
    this.createStack();
  }

  createStack() {
    if (Array.isArray(this.data)) {
      this.stack = [...this.data];
      this.top = this.data.length;
    } else {
      throw new Error("Data needs to be an array/list.");
    }
  }

  isEmpty() {
    return this.top === -1 && this.top < this.length - 1;
  }

  isFull() {
    return this.top >= this.length;
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
    return this.stack[this.top - 1];
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
