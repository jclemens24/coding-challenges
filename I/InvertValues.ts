/**
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
 * 
 * ```
 * invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
```
 */

export function invert(array: number[]): number[] {
  if (!array.length || array === undefined) return [];
  return array.map((num) => -num);
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));

// While the first version works, let's write something more intuitive and clear

export function invertV2(array: number[]): number[] {
  if (!array.length || array === undefined) return [];
  return array.map((num) => (num >= 0 ? -num : Math.abs(num)));
}

console.log(invertV2([1, -2, 3, -4, 5]));
