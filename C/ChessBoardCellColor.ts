function ChessBoardCellColor(cell1: string, cell2: string): boolean {
  return (
    (cell1.charCodeAt(0) +
      Number(cell1[1]) +
      cell2.charCodeAt(0) +
      Number(cell2[1])) %
      2 ===
    0
  );
}

console.log(ChessBoardCellColor('A1', 'C3'));

function ChessBoardCellColorV2(cell1: string, cell2: string): boolean {
  type Chess = {
    [key: string]: number;
  };
  const chessBoard: Chess = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8
  };

  const totalCell1 = chessBoard[cell1[0]] + parseInt(cell1[1]);
  const totalCell2 = chessBoard[cell2[0]] + parseInt(cell2[1]);

  return totalCell1 % 2 === totalCell2 % 2;
}

console.log(ChessBoardCellColorV2('A1', 'C3'));
