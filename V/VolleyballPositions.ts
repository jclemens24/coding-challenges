/**
 * You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you're curious about how the coach arranged the players on the field at the start of the game.

  The team you favor plays in the following formation:

```0 3 0
  4 0 2
  0 6 0
  5 0 1```

  where positive numbers represent positions occupied by players. After the team gains the serve, its members rotate one position in a clockwise direction, so the player in position 2 moves to position 1, the player in position 3 moves to position 2, and so on, with the player in position 1 moving to position 6.
 */

const VolleyballPosition = (formation: string[][], k: number): string[][] => {
  const rotations = [
    [0, 1],
    [1, 0],
    [3, 0],
    [2, 1],
    [3, 2],
    [1, 2]
  ];

  const initialFormation = formation.map((row) => row.slice());
  k = 6 - (k % 6);
  console.log('k: %d', k);
  for (let i = 0; i < 6; i++) {
    initialFormation[rotations[i][0]][rotations[i][1]] =
      formation[rotations[(i + k) % 6][0]][rotations[(i + k) % 6][1]];
  }
  return initialFormation;
};

console.log(
  VolleyballPosition(
    [
      ['empty', 'Player5', 'empty'],
      ['Player4', 'empty', 'Player2'],
      ['empty', 'Player3', 'empty'],
      ['Player6', 'empty', 'Player1']
    ],
    2
  )
);

console.log(
  VolleyballPosition(
    [
      ['empty', 'Alice', 'empty'],
      ['Bob', 'empty', 'Charlie'],
      ['empty', 'Dave', 'empty'],
      ['Eve', 'empty', 'Frank']
    ],
    6
  )
);

/* Perhaps a more clearcut version would be: */

const VolleyballPositionV2 = (formation: string[][], k: number): string[][] => {
  for (let i = k % 6; i > 0; i--) {
    const temp = formation[0][1];
    // Rotate clockwise positions
    formation[0][1] = formation[1][2];
    formation[1][2] = formation[3][2];
    formation[3][2] = formation[2][1];
    formation[2][1] = formation[3][0];
    formation[3][0] = formation[1][0];
    formation[1][0] = temp;
  }
  return formation;
};

console.log(
  VolleyballPositionV2(
    [
      ['empty', 'Alice', 'empty'],
      ['Bob', 'empty', 'Charlie'],
      ['empty', 'Dave', 'empty'],
      ['Eve', 'empty', 'Frank']
    ],
    6
  )
);
