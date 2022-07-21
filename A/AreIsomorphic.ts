/**
 * Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

Given two two-dimensional arrays, check if they are isomorphic.
 */

const IsIsomorphic = (array1: number[][], array2: number[][]): boolean => {
  return array1.every(
    (_, i, arr1) =>
      arr1.length === array2.length && arr1[i].length === array2[i].length
  );
};

console.log(
  IsIsomorphic(
    [
      [1, 1, 1],
      [0, 0]
    ],
    [
      [2, 1, 1],
      [2, 1]
    ]
  )
);
console.log(IsIsomorphic([[2], []], [[2]]));

// Could also just have easily done....

function IsIsomorphicV2(array1: number[][], array2: number[][]): boolean {
  return (
    array1.length === array2.length &&
    array1.every((row, i) => row.length === array2[i].length)
  );
}

console.log(IsIsomorphicV2([[2], []], [[2]]));
