/**
 * The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):
```
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
```
 */

export function twoOldestAges(ages: number[]): number[] {
  if (ages.length === 0 || ages === undefined) {
    return [];
  }
  const sortedAges = ages.sort((a, b) => a - b);
  return sortedAges.slice(-2);
}

console.log(twoOldestAges([1, 2, 10, 8]));
console.log(twoOldestAges([1, 5, 87, 45, 8, 8, 87]));

export function twoOldestAgesV2(ages: number[]): number[] {
  const max = Math.max(...ages);
  const oldest = ages.splice(ages.indexOf(max), 1);
  return [...ages.splice(ages.indexOf(Math.max(...ages)), 1), ...oldest];
}

console.log(twoOldestAgesV2([1, 2, 10, 8]));
console.log(twoOldestAgesV2([1, 5, 87, 45, 8, 8]));
