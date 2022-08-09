/**
 * Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

```
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
```
 */

export function basicOp(
  operation: string,
  value1: number,
  value2: number
): number {
  if (operation === '+') return value1 + value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
  else return value1 - value2;
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));

export function basicOpV2(
  operation: string,
  value1: number,
  value2: number
): number {
  const ops: { [operator: string]: (a: number, b: number) => number } = {
    '+': (val1: number, val2: number) => val1 + val2,
    '-': (val1: number, val2: number) => val1 - val2,
    '*': (val1: number, val2: number) => val1 * val2,
    '/': (val1: number, val2: number) => val1 / val2
  };

  return ops[operation](value1, value2);
}

console.log(basicOpV2('+', 4, 7));
console.log(basicOpV2('-', 15, 18));
