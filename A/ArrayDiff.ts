/**
 * Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
```
array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
```
If a value is present in b, all of its occurrences must be removed from the other:
```
array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)
```
 */

export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((num) => !b.includes(num));
}

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([1, 2, 3], [1, 2]));

export function arrayDiffV2(a: number[], b: number[]): number[] {
  const uniqueB = new Set(b);
  return a.filter((val) => !uniqueB.has(val));
}

console.log(arrayDiffV2([], [4, 5]));
console.log(arrayDiffV2([3, 4], [3]));
console.log(arrayDiffV2([1, 8, 2], []));
console.log(arrayDiffV2([1, 2, 3], [1, 2]));

export const arrayDiffV3 = (a: number[], b: number[]): number[] => {
  return a.filter((num) => b.indexOf(num) < 0);
};

console.log(arrayDiffV3([], [4, 5]));
console.log(arrayDiffV3([3, 4], [3]));
console.log(arrayDiffV3([1, 8, 2], []));
console.log(arrayDiffV3([1, 2, 3], [1, 2]));
