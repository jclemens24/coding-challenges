/**
 * Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:

```
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
```
 */

export function oddOrEven(array: number[]): string {
  if (array === undefined || array.length === 0) return 'even';
  const sum = array.reduce((prev, curr) => prev + curr, 0);
  return sum === 0 ? 'even' : sum % 2 ? 'odd' : 'even';
}

console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([]));
