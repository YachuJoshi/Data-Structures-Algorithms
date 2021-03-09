const { Stack } = require("./stack");

describe("initalize", () => {
  test("wrong data type", () => {
    expect(() => {
      const stack = new Stack(10);
    }).toThrow(Error);
  });
});

describe("peek", () => {
  test("empty stack", () => {
    const stack = new Stack({ data: [] });
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.peek()).toBeUndefined();
  });

  test("pre-filled stack", () => {
    const stack = new Stack({ data: [1, 2, 3, 4] });
    expect(stack.top).toEqual(3);
    expect(stack.peek()).toEqual(4);
  });
});

describe("push", () => {
  test("stack not full", () => {
    const stack = new Stack({ data: [1, 2, 3, 4] });
    stack.push(5);

    expect(stack.peek()).toEqual(5);
    expect(stack.size()).toEqual(5);
    expect(stack.list()).toEqual([1, 2, 3, 4, 5]);
  });

  test("full stack", () => {
    const stack = new Stack({ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });

    expect(() => {
      stack.push(0);
    }).toThrow(Error);
    expect(stack.isFull()).toBeTruthy();
    expect(stack.peek()).toEqual(10);
    expect(stack.list()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe("pop", () => {
  test("stack not empty", () => {
    const stack = new Stack({ data: [1, 2, 3, 4] });

    expect(stack.pop()).toEqual(4);
    expect(stack.peek()).toEqual(3);
    expect(stack.size()).toEqual(3);
    expect(stack.list()).toEqual([1, 2, 3]);
  });

  test("empty stack", () => {
    const stack = new Stack({ data: [] });

    expect(() => {
      stack.pop();
    }).toThrow(Error);
    expect(stack.peek()).toBeUndefined();
  });
});
