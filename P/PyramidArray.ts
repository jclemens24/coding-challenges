/**
 * DESCRIPTION:
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

```
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
```
Note: the subarrays should be filled with 1s
 */

export function pyramid(n: number) {
  return Array.from({ length: n }, (_, k) => {
    return Array(k + 1).fill(1);
  });
}

console.log(pyramid(1));
console.log(pyramid(3));

// Using Recursion

export function pyramidV2(n: number): any[][] {
  if (n === 0) return [];
  const arr = new Array(n).fill(1);

  return [...pyramidV2(n - 1), arr];
}

console.log(pyramidV2(1));
console.log(pyramidV2(3));

// Using Loops

export function pyramidV3(n: number): any[][] {
  const result: Array<Array<1>> = [];

  while (n > 0) {
    result.unshift(new Array(n).fill(1));
    n -= 1;
  }

  return result;
}

console.log(pyramidV3(1));
console.log(pyramidV3(3));
