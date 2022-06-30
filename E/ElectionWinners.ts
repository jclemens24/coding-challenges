function ElectionWinners(votes: number[], k: number): number {
  const max = Math.max(...votes);
  const possibleWinners = votes.filter((vote) => {
    return k + vote > max || vote === max;
  }).length;
  console.log(possibleWinners);
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

function ElectionWinnersV3(votes: number[], remainingVotes: number): number {
  votes.sort((a, b) => b - a);
  console.log(votes);
  let count: number = 0;
  votes.forEach((vote, i) => {
    if (vote + remainingVotes > (i === 0 ? votes[1] : votes[0])) {
      ++count;
    }
  });
  return count;
}

console.log(ElectionWinnersV3([3, 4, 8, 7, 9, 5, 6, 8, 4, 2, 1], 4));
