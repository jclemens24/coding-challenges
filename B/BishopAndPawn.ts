function BishopAndPawn(bishop: string, pawn: string): boolean {
  console.log(bishop.charCodeAt(0), pawn.charCodeAt(0));
  return (
    Math.abs(Number(bishop[1]) - Number(pawn[1])) ===
    Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0))
  );
}

console.log(BishopAndPawn('a1', 'c3'));
