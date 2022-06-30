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
