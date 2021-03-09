class Queue {
  constructor({ data, maxLength = 6 }) {
    this.queue = [];
    this.front = -1;
    this.length = maxLength;
    this.createQueue(data);
  }

  createQueue(data) {
    if (Array.isArray(data)) {
      this.queue = data.slice(0, this.length);
      this.front = 0;
    } else {
      throw new Error("Data must be array/list.");
    }
  }

  get rear() {
    return this.queue.length - 1;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.queue.push(item);
    } else {
      throw new Error("Queue is full.");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;
      return item;
    } else {
      throw new Error("Queue is empty");
    }
  }

  isEmpty() {
    return this.queue.length < 1;
  }

  isFull() {
    return this.queue.length === this.length;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.queue.length;
  }

  list() {
    return this.queue;
  }
}

module.exports = {
  Queue,
};
