/**
 * Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix (i.e. all cells that belong either to the ath row or to the bth column, or to both). Return sum of all elements of that union.
 */

const CrossingSum = (matrix: number[][], a: number, b: number): number => {
  const rows = [];
  const column = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === a) {
        rows.push(matrix[i][j]);
      }
      if (j === b) {
        column.push(matrix[i][j]);
      }
    }
  }
  const first = rows
    .slice(0, rows.length - 1)
    .reduce((prev, curr) => prev + curr, 0);

  const second = column.reduce((prev, curr) => prev + curr, 0);
  return first + second;
};

console.log(
  CrossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3]
    ],
    1,
    3
  )
);

console.log(
  CrossingSum(
    [
      [1, 1],
      [1, 1]
    ],
    0,
    0
  )
);

console.log(
  CrossingSum(
    [
      [1, 1],
      [3, 3],
      [1, 1],
      [2, 2]
    ],
    3,
    0
  )
);
