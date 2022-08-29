/* eslint-disable no-array-constructor */
/**
 * You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.
```
Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
```

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
 */

export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
  if (!Array.isArray(arrayOfArrays)) return 0;
  if (arrayOfArrays.some((arr) => !Array.isArray(arr) || arr.length === 0))
    return 0;
  arrayOfArrays.sort((a: any[], b: any[]) => b.length - a.length);
  let result: number = 0;

  for (let i = 0; i < arrayOfArrays.length - 1; i++) {
    if (arrayOfArrays[i].length - arrayOfArrays[i + 1].length !== 1) {
      result = arrayOfArrays[i].length - 1;
      break;
    }
  }
  return result;
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);
console.log(getLengthOfMissingArray([[null], [null, null, null]]));
console.log(getLengthOfMissingArray([]));
console.log(
  getLengthOfMissingArray([
    ['a', 'a', 'a'],
    ['a', 'a'],
    ['a', 'a', 'a', 'a'],
    ['a'],
    ['a', 'a', 'a', 'a', 'a', 'a']
  ])
);

export function getLengthOfMissingArrayV2(arr: any[]): number {
  if (arr === null || arr.length < 1) {
    return 0;
  }

  const length = new Array<number>();
  arr.forEach((a: any[]): void => {
    length.push(a.length);
  });
  length.sort((a, b) => a - b);
  const firstArr: number = length.shift()!;
  if (firstArr === 0) {
    return 0;
  }
  const missing: number = length.reduce(
    (acc, curr) => (curr - acc > 1 ? acc : curr),
    firstArr
  );
  return missing + 1;
}

console.log(
  getLengthOfMissingArrayV2([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);
console.log(getLengthOfMissingArrayV2([[null], [null, null, null]]));
console.log(getLengthOfMissingArrayV2([]));
console.log(
  getLengthOfMissingArrayV2([
    ['a', 'a', 'a'],
    ['a', 'a'],
    ['a', 'a', 'a', 'a'],
    ['a'],
    ['a', 'a', 'a', 'a', 'a', 'a']
  ])
);
