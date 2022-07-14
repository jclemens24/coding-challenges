/**
 * Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

 * @param votes - array of ints representing number of votes for each candidate so far 
 * @param k - int equal to number of voters yet to cast a vote
 * @returns Number of candidates who can still win the election
 */

function ElectionWinners(votes: number[], k: number): number {
  const max = Math.max(...votes);
  const possibleWinners = votes.filter((vote) => {
    return k + vote > max || vote === max;
  }).length;
  return k ? possibleWinners : possibleWinners === 1 ? 1 : 0;
}

function ElectionWinnersV2(votes: number[], k: number): number {
  const max = Math.max(...votes);
  return k || votes.indexOf(max) !== votes.lastIndexOf(max)
    ? votes.filter((vote) => {
        return vote + k > max;
      }).length
    : 1;
}

console.log(ElectionWinners([3, 4, 8, 7, 9, 5, 6, 8, 4, 2, 1], 4));
console.log(ElectionWinnersV2([3, 4, 8, 7, 9, 5, 6, 8, 4, 2, 1], 4));

function ElectionWinnersV3(votes: number[], k: number): number {
  votes.sort((a, b) => b - a);
  let count: number = 0;
  votes.forEach((vote, i) => {
    if (vote + k > (i === 0 ? votes[1] : votes[0])) {
      ++count;
    }
  });
  return count;
}

console.log(ElectionWinnersV3([3, 4, 8, 7, 9, 5, 6, 8, 4, 2, 1], 4));
