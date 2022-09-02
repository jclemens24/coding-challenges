/**
 * Closure Counter
  1. Define the function counter that returns a function that returns an increasing value.
  2. The first value should be 1.
  3. You're going to have to use closures.

Example:
```
const newCounter = counter();
newCounter() // 1
newCounter() // 2
```
Closure:
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures}
 */

export function counter(n = 0): Function {
  return function () {
    n += 1;
    return n;
  };
}

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

export function counterV2(): Function {
  let counter = 0;
  return function increment() {
    counter += 1;
    return counter;
  };
}

const newCounter2 = counterV2();
console.log(newCounter2());
console.log(newCounter2());
