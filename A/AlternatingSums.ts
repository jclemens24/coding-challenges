function AlternatingSums(a: number[]): number[] {
  const teamOne: number[] = [];
  const teamTwo: number[] = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      teamOne.push(a[i]);
    } else {
      teamTwo.push(a[i]);
    }
  }

  const teamOneWeight = teamOne.reduce((acc, curr) => acc + curr, 0);
  const teamTwoWeight = teamTwo.reduce((acc, curr) => acc + curr, 0);
  const combined = [teamOneWeight, teamTwoWeight];

  console.log(teamOne);
  console.log(teamTwo);
  console.log(combined);
  return combined;
}

AlternatingSums([50, 60, 60, 45, 70]);

function AlternatingSumsV2(a: number[]): number[] {
  // eslint-disable-next-line no-sequences
  return a.reduce((acc, curr, i) => ((acc[i % 2] += curr), acc), [0, 0]);
}

console.log(AlternatingSumsV2([50, 60, 60, 45, 70]));
