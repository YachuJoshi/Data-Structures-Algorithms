class CircularQueue {
  constructor({ data, maxLength = 6 }) {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.length = maxLength;
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
      this.rear = (this.rear + 1) % this.length;
      this.queue[this.rear] = item;
    } else {
      throw new Error("Queue is full");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.queue[this.front];
      this.queue = this.queue.filter((_, index) => index !== this.front);
      this.front = (this.front + 1) % this.length;
      return item;
    } else {
      throw new Error("Queue is empty.");
    }
  }

  isEmpty() {
    return this.queue.length < 1;
  }

  isFull() {
    return (
      (this.front === 0 && this.rear === this.length - 1) ||
      this.front === this.rear + 1
    );
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
  CircularQueue,
};
