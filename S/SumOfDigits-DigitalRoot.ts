/**
 * Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples

```
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```
 */

export const digitalRoot = (n: number): number => {
  let result: number = 0;

  while (n.toString().length > 1) {
    result = n
      .toString()
      .split('')
      .reduce((acc, curr) => acc + +curr, 0);
    console.log('num: %d', result);
    n = result;
  }
  return result;
};

console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));

// Using Recursion

export const digitalRootV2 = (n: number): number => {
  return n > 9
    ? digitalRootV2([...`${n}`].reduce((acc, curr) => acc + +curr, 0))
    : n;
};

console.log(digitalRootV2(942));
console.log(digitalRootV2(132189));
console.log(digitalRootV2(493193));

// Using Logic

export const digitalRootV3 = (n: number): number => {
  return ((n - 1) % 9) + 1;
};

console.log(digitalRootV3(942));
console.log(digitalRootV3(132189));
console.log(digitalRootV3(493193));
