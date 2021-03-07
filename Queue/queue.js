class Queue {
  constructor(data) {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.length = 6;
    this.createQueue(data);
  }

  createQueue(data) {
    if (Array.isArray(data)) {
      this.queue = [...data].filter((_, index) => index <= this.length - 1);
      this.front = 0;
      this.rear = this.queue.length - 1;
    } else {
      throw new Error("Data must be array/list.");
    }
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.queue.push(item);
      this.rear++;
    } else {
      throw new Error("Queue is full.");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.front++;
      return this.queue.shift();
    } else {
      throw new Error("Queue is empty");
    }
  }

  isEmpty() {
    return this.queue.length < 1;
  }

  isFull() {
    return this.rear === this.length - 1;
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
