/**
 *  In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.

Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.
 */

function TennisSet(score1: number, score2: number): boolean {
  const maxScore = Math.max(score1, score2);
  const minScore = Math.min(score1, score2);

  return (
    (maxScore === 6 && minScore < 5) ||
    (maxScore === 7 && minScore >= 5 && minScore <= 6)
  );
}

console.log(TennisSet(7, 6));
