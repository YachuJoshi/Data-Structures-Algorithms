const { Queue } = require("./queue");

describe("initialize", () => {
  test("wrong data-type", () => {
    expect(() => {
      const queue = new Queue(10);
    }).toThrow(Error);
  });
});

describe("peek", () => {
  test("empty queue", () => {
    const queue = new Queue([]);

    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.peek()).toEqual(undefined);
  });

  test("pre-filled queue", () => {
    const queue = new Queue([1, 2, 3, 4]);

    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.peek()).toEqual(1);
  });
});

describe("enqueue", () => {
  test("not-full queue", () => {
    const queue = new Queue([1, 2, 3, 4]);

    queue.enqueue(5);

    expect(queue.peek()).toEqual(1);
    expect(queue.size()).toEqual(5);
    expect(queue.list()).toEqual([1, 2, 3, 4, 5]);
  });

  test("full queue", () => {
    const queue = new Queue([1, 2, 3, 4, 5, 6]);

    expect(() => {
      queue.enqueue(7);
    }).toThrow(Error);
    expect(queue.isFull()).toBeTruthy();
    expect(queue.size()).toEqual(6);
    expect(queue.list()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("dequeue", () => {
  test("non-empty queue", () => {
    const queue = new Queue([1, 2, 3, 4]);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
    expect(queue.size()).toEqual(4);
    expect(queue.list()).toEqual([undefined, 2, 3, 4]);
  });

  test("empty queue", () => {
    const queue = new Queue([]);

    expect(() => {
      queue.dequeue();
    }).toThrow(Error);
    expect(queue.size()).toEqual(0);
    expect(queue.list()).toEqual([]);
  });
});
