/**
 * Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
```
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
```
 */

export function getSum(a: number, b: number): number {
  const nums: Array<number> = [];
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (let index = min; index <= max; index++) {
    nums.push(index);
  }
  return nums.reduce((prev, curr) => prev + curr, 0);
}

console.log(getSum(0, 1));
console.log(getSum(1, 2));
console.log(getSum(-1, 2));
console.log(getSum(0, -1));

export function getSumV2(a: number, b: number): number {
  let result: number = 0;
  let min = Math.min(a, b);
  const max = Math.max(a, b);
  while (min <= max) {
    result += min;
    min++;
  }
  return result;
}
console.log(getSumV2(0, -1));
console.log(getSumV2(0, 1));
console.log(getSumV2(1, 2));
console.log(getSumV2(-1, 2));

export function getSumV3(a: number, b: number): number {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

console.log(getSumV3(0, -1));
console.log(getSumV3(0, 1));
console.log(getSumV3(1, 2));
console.log(getSumV3(-1, 2));

// Using Recursion
export function getSumV4(a: number, b: number): number {
  if (a > b) [a, b] = [b, a];
  if (a === b) return a;
  return a + getSumV4(a + 1, b);
}

console.log(getSumV4(0, -1));
console.log(getSumV4(0, 1));
console.log(getSumV4(1, 2));
console.log(getSumV4(-1, 2));
