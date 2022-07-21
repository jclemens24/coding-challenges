/**
 * Given a rectangular matrix and an integer `column`, return an array containing the elements of the `columnth` column of the given matrix (the leftmost column is the `0th` one).
 * 
 * Example

   For

   ```matrix = [[1, 1, 1, 2], 
          [0, 5, 0, 4], 
          [2, 1, 3, 6]]```

  and `column = 2`, the output should be
  `solution(matrix, column) = [1, 0, 3]`.
 */

const ExtractMatrixColumn = (matrix: number[][], column: number): number[] => {
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push(matrix[i][column]);
  }
  return arr;
};

console.log(
  ExtractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6]
    ],
    2
  )
);

console.log(
  ExtractMatrixColumn(
    [
      [1, 1, 1],
      [0, 5, 0],
      [2, 1, 3]
    ],
    2
  )
);

console.log(
  ExtractMatrixColumn(
    [
      [1, 1],
      [5, 0],
      [2, 3]
    ],
    0
  )
);

const ExtractMatrixColumnV2 = (
  matrix: number[][],
  column: number
): number[] => {
  return matrix.map((numArr) => numArr[column]);
};

console.log(
  ExtractMatrixColumnV2(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6]
    ],
    2
  )
);
