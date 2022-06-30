/**
 *
 * @param {number[][]} matrix
 * @returns The sum of the values that are not directly beneath an element that contains a 0
 */

function MatrixElementSum(matrix: number[][]): number {
  // Start off with 0
  let sum: number = 0;
  // Get the length of the matrix array
  const matrixLen = matrix.length;
  // Get the length of one row
  const nestedLen = matrix[0].length;
  for (let i = 0; i < nestedLen; i++) {
    for (let j = 0; j < matrixLen; j++) {
      // Traverses down column, if a 0 is found, the room is haunted, break from inner loop and step j
      if (matrix[j][i] === 0) break;
      // Otherwise, add the value to sum variable
      sum += matrix[j][i];
    }
  }
  return sum;
}

console.log(
  MatrixElementSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
  ])
);

function MatrixElementSumV2(matrix: number[][]): number {
  return matrix
    .map((row, i) =>
      row
        .map((num, j) =>
          [...new Array(i).keys()].every((key) => matrix[key][j] > 0) ? num : 0
        )
        .reduce((x, y) => x + y)
    )
    .reduce((x, y) => x + y);
}

console.log(
  MatrixElementSumV2([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
  ])
);

console.log([...new Array(5).keys()]);
const arry1 = Array(5).keys();
for (const key of arry1) {
  console.log(key);
}
