/* eslint-disable camelcase */
/**
 * Write a function, `persistence`, that takes in a positive parameter `num` and returns its multiplicative persistence, which is the number of times you must multiply the digits in `num` until you reach a single digit.

For example (Input --> Output):

```
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
```
 */

export function persistence(num: number): number {
  let count: number = 0;

  let numStr = num.toString().split('');
  while (numStr.join('').length > 1) {
    const newNum = numStr.reduce((acc, curr) => acc * +curr, 1);
    numStr = newNum.toString().split('');
    count++;
  }
  return count;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));

/* We could also use recursion to solve this problem, although IMO a while loop is probably more efficient here */

export function persistenceV2(num: number, count: number = 0): number {
  if (num.toString().length === 1) return count;
  return persistenceV2(
    [...num.toString()].map(Number).reduce((prev, curr) => prev * curr, 1),
    count + 1
  );
}

console.log(persistenceV2(39));
console.log(persistenceV2(999));
console.log(persistenceV2(4));
