/**
 * The longest diagonals of a square matrix are defined as follows:

  1.  the first longest diagonal goes from the top left corner to the bottom right one;

  2.  the second longest diagonal goes from the top right corner to the bottom left one.

Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.
 */

function SwapDiagonals(matrix: number[][]): number[][] {
  const copy = matrix.map((row) => row.slice());

  for (let i = 0; i < matrix.length; i++) {
    copy[i][i] = matrix[i][matrix.length - i - 1];
    copy[i][matrix.length - i - 1] = matrix[i][i];
  }
  return copy;
}

console.log(
  SwapDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);

console.log(SwapDiagonals([[239]]));
console.log(
  SwapDiagonals([
    [1, 10],
    [100, 1000]
  ])
);

function SwapDiagonalsV2(matrix: number[][]): number[][] {
  return matrix.map(
    (row, i) => (
      ([row[i], row[matrix.length - i - 1]] = [
        row[matrix.length - i - 1],
        row[i]
        // eslint-disable-next-line no-sequences
      ]),
      row
    )
  );
}

console.log(
  SwapDiagonalsV2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);

// I think this version using .map() method is much easier to understand

function SwapDiagonalsV3(matrix: number[][]): number[][] {
  return matrix.map((row, i) => {
    const rowCopy = row.slice();
    rowCopy[i] = matrix[i][matrix.length - i - 1];
    rowCopy[matrix.length - i - 1] = matrix[i][i];
    return rowCopy;
  });
}

console.log(
  SwapDiagonalsV3([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
