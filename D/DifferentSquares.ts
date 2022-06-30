/**
 * Given a rectangular matrix containing only digits, calculate the number of different 2 * 2 squares in it.
 */

const DifferentSquares = function (matrix: number[][]): number {
  const uniqueHashes = new Set();

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      const hash =
        matrix[i][j] +
        10 * matrix[i][j + 1] +
        100 * matrix[i + 1][j] +
        1000 * matrix[i + 1][j + 1];
      console.log('hash', hash);

      uniqueHashes.add(hash);
    }
  }

  console.log(uniqueHashes);
  return uniqueHashes.size;
};

DifferentSquares([
  [1, 2, 1],
  [2, 2, 2],
  [2, 2, 2],
  [1, 2, 3],
  [2, 2, 1]
]);
