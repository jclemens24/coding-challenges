/**
 * Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement.
 * 
 * @param {string} bishop - A string representing the bishops position on a chess board 
 * @param {string} pawn - A string representing the pawns position
 * @returns {boolean} A boolean indicating whether or not the bishop can capture the pawn in a single move
 */

function BishopAndPawn(bishop: string, pawn: string): boolean {
  console.log(bishop.charCodeAt(0), pawn.charCodeAt(0));
  return (
    Math.abs(Number(bishop[1]) - Number(pawn[1])) ===
    Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0))
  );
}

console.log(BishopAndPawn('a1', 'c3'));
