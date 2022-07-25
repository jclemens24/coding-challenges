/**
 * Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
 * 
 * @param {string} cell - A string representing position of knight  
 * @returns {number} - Number of different moves the knight can perform
 */

function ChessKnight(cell: string): number {
  // Cell will look like 'a1';
  const cellChar = 'abcdefgh'.indexOf(cell[0]) + 1;
  console.log(cellChar);
  const cellNum = Number(cell[1]);
  console.log('Cell Num %s', cellNum);
  return [
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
    [-2, 1],
    [-2, -1],
    [-1, 2],
    [-1, -2]
  ].filter(
    (el) =>
      cellNum + el[0] > 0 &&
      cellNum + el[0] <= 8 &&
      cellChar + el[1] > 0 &&
      cellChar + el[1] <= 8
  ).length;
}

console.log(ChessKnight('a1'));
