/**
 * Consider a (2k+1) × (2k+1) square subarray of an integer integers matrix. Let's call the union of the square's two longest diagonals, middle column and middle row a star. Given the coordinates of the star's center in the matrix and its width, rotate it 45 · t degrees clockwise preserving position of all matrix elements that do not belong to the star.
 */

const StarRotation = (
  matrix: number[][],
  width: number,
  center: number[],
  t: number
): number[][] => {
  const rotations = [
    (i: number) => [center[0] - i, center[1]],
    (i: number) => [center[0] - i, center[1] + i],
    (i: number) => [center[0], center[1] + i],
    (i: number) => [center[0] + i, center[1] + i],
    (i: number) => [center[0] + i, center[1]],
    (i: number) => [center[0] + i, center[1] - i],
    (i: number) => [center[0], center[1] - i],
    (i: number) => [center[0] - i, center[1] - i]
  ];

  const matrixCopy = matrix.map((row) => row.slice());
  t = t % 8;
  for (let i = 1; i <= (width - 1) / 2; i++) {
    for (let j = 0; j < 8; j++) {
      matrixCopy[rotations[(j + t) % 8](i)[0]][rotations[(j + t) % 8](i)[1]] =
        matrix[rotations[j](i)[0]][rotations[j](i)[1]];
    }
  }
  return matrixCopy;
};

console.log(
  StarRotation(
    [
      [1, 0, 0, 2, 0, 0, 3],
      [0, 1, 0, 2, 0, 3, 0],
      [0, 0, 1, 2, 3, 0, 0],
      [8, 8, 8, 9, 4, 4, 4],
      [0, 0, 7, 6, 5, 0, 0],
      [0, 7, 0, 6, 0, 5, 0],
      [7, 0, 0, 6, 0, 0, 5]
    ],
    7,
    [3, 3],
    1
  )
);
