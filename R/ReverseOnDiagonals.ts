/**
 * The longest diagonals of a square matrix are defined as follows:

  1.  the first longest diagonal goes from the top left corner to the bottom right one;

  2.  the second longest diagonal goes from the top right corner to the bottom left one.

Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.
 */

function ReverseDiagonals(matrix: number[][]): number[][] {
  let i = 0;
  let j = matrix[i].length - 1;
  let tempVar = 0;

  while (i < j) {
    tempVar = matrix[i][i];
    matrix[i][i] = matrix[j][j];
    matrix[j][j] = tempVar;

    tempVar = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = tempVar;
    i++;
    j--;
  }
  return matrix;
}

console.log(
  ReverseDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);

function ReverseDiagonalsV2(matrix: number[][]): number[][] {
  const a = matrix.map((row, i) => row.filter((_, j) => i === j)[0]);
  const b = matrix.map(
    (row, i) => row.filter((_, j) => i + j + 1 === matrix.length)[0]
  );

  console.log(a);
  console.log(b);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i][i] = a.pop() as number;
    matrix[i][matrix.length - i - 1] = b.pop()!;
  }
  return matrix;
}

console.log(
  ReverseDiagonalsV2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
