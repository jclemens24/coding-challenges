/**
 * 
 * DESCRIPTION:
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:
```
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
```
The corresponding sums are (put together in a list): `[20, 20, 19, 16, 10, 0]`

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
 * 
 * @param ls 
 * @returns 
 */

export function sumOfParts(ls: number[]): number[] {
  let sum: number = 0;
  const result: number[] = [0];
  for (let i = ls.length - 1; i >= 0; i--) {
    sum += ls[i];
    result.push(sum);
    ls.length = ls.length - 1; // This is actually a performant way of resizing arrays
  }
  return result.reverse();
}

console.log(sumOfParts([0, 1, 3, 6, 10]));
console.log(
  sumOfParts([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
);

export function sumOfPartsV2(ls: number[]): number[] {
  let sum = ls.reduce((acc, curr) => acc + curr, 0);
  return [...[sum], ...ls.map((n) => (sum -= n))];
}

console.log(sumOfPartsV2([0, 1, 3, 6, 10]));
console.log(
  sumOfPartsV2([
    744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358
  ])
);
