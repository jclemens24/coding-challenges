/**
 * Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).
 */

function RowsRearranged(matrix: number[][]): boolean {
  let flag: boolean = true;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i !== j) {
        flag =
          (flag && matrix[i].every((num, index) => num > matrix[j][index])) ||
          matrix[i].every((num, index) => num < matrix[j][index]);
      }
    }
  }
  return flag;
}

RowsRearranged([
  [2, 7, 1],
  [0, 2, 0],
  [1, 3, 1]
]);
