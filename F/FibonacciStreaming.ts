/**
 * You're going to provide a needy programmer a utility method that generates an infinite sized, sequential `IntStream` (in TypeScript `Iterator<number>`, in Python `generator`) which contains all the numbers in a fibonacci sequence.

A fibonacci sequence starts with two 1s. Every element afterwards is the sum of the two previous elements. See:
```
1, 1, 2, 3, 5, 8, 13, ..., 89, 144, 233, 377, ...
```
 */

const _stream = (max = Number.MAX_VALUE) => {
  let n1 = 0;
  let n2 = 0;
  return {
    next: () => {
      let nextVal = n2 === 0 ? 1 : n1 + n2;
      n1 = n2;
      n2 = nextVal;

      if (nextVal >= max) {
        nextVal = NaN;
      }

      return {
        value: nextVal,
        done: !isNaN(nextVal)
      };
    },

    [Symbol.iterator]() {
      return this;
    }
  };
};

export function fibonacciSequence(): Iterator<number, number, number> {
  return _stream();
}

export function* fibonacciSequenceV2(): Iterator<number> {
  let a = 0;
  let b = 1;
  while (true) {
    [b, a] = [a + b, b];
    yield a;
  }
}

const stream = fibonacciSequenceV2();
const expected = [
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
  4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229,
  832040
];

console.log(
  Array(expected.length)
    .fill(0)
    .map(() => stream.next().value)
);
