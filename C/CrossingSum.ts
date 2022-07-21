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
  const first = rows.reduce((prev, curr) => prev + curr, 0);
  const second = column.reduce((prev, curr) => prev + curr, 0);
  return first + second - matrix[a][b];
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

console.log(
  CrossingSum(
    [
      [17, 54],
      [20, 39],
      [98, 87],
      [20, 91],
      [2, 82],
      [16, 47],
      [65, 100],
      [99, 81],
      [90, 92],
      [64, 39],
      [18, 31],
      [70, 52],
      [76, 88],
      [24, 48],
      [18, 53],
      [96, 91],
      [28, 11]
    ],
    10,
    1
  )
);

const CrossingSumV2 = (matrix: number[][], a: number, b: number): number => {
  return (
    matrix[a].reduce((prev, curr) => prev + curr) +
    matrix.reduce((prev, curr) => prev + curr[b], 0) -
    matrix[a][b]
  );
};

console.log(
  CrossingSumV2(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3]
    ],
    1,
    3
  )
);
