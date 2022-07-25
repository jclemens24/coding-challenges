/**
 * In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately rush towards the opposite ends of that same diagonal.

Given the initial positions (in chess notation) of two bishops, bishop1 and bishop2, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.

I'm not going to lie, I struggled with this solution a bit but I was able to get a mostly working version on my own. Version1 will pass 11/12 tests and I didn't want to pay the coins to reveal the hidden test it was failing. Try and follow Version 2, which again, I studied and took from another individual that passed the tests. Hey, sometimes we give it our best and it's not good enough. At least I can see now why I wasn't handling a specific case after reading V2. Learning is key!!!!!
 */

function BishopDiagonal(bishop1: string, bishop2: string): string[] {
  const bishop1Pos = [
    1 + bishop1[0].charCodeAt(0) - 'a'.charCodeAt(0),
    parseInt(bishop1[1], 10)
  ];

  const bishop2Pos = [
    1 + bishop2[0].charCodeAt(0) - 'a'.charCodeAt(0),
    parseInt(bishop2[1], 10)
  ];

  const finalPosBishop1 = bishop1Pos.slice();
  const finalPosBishop2 = bishop2Pos.slice();

  console.log(bishop1Pos);
  console.log(bishop2Pos);

  if (bishop1Pos[0] + bishop1Pos[1] === bishop2Pos[0] + bishop2Pos[1]) {
    if (bishop1Pos[0] + bishop2Pos[0] > 9) {
      finalPosBishop1[0] = 8;
      finalPosBishop2[1] = 8;
      finalPosBishop1[1] = bishop1Pos[0] + bishop1Pos[1] - 8;
      finalPosBishop2[0] = bishop2Pos[0] + bishop2Pos[1] - 8;
    } else {
      finalPosBishop1[0] = 1;
      finalPosBishop1[1] = bishop1Pos[0] + bishop1Pos[1] - 1;
      finalPosBishop2[0] = 1;
      finalPosBishop2[1] = bishop2Pos[0] + bishop2Pos[1] - 1;
    }
  } else if (
    Math.abs(bishop1Pos[0] - bishop1Pos[1]) ===
    Math.abs(bishop2Pos[0] - bishop2Pos[1])
  ) {
    if (bishop1Pos[0] - bishop1Pos[1] < 0) {
      finalPosBishop1[0] = 1;
      finalPosBishop1[1] = 1 + bishop1Pos[1] - bishop1Pos[0];
      finalPosBishop2[0] = 8 + bishop2Pos[0] - bishop2Pos[1];
      finalPosBishop2[1] = 8;
    } else {
      finalPosBishop1[0] = 1 + bishop1Pos[0] - bishop1Pos[1];
      finalPosBishop1[1] = 1;
      finalPosBishop2[0] = 8;
      finalPosBishop2[1] = 8 - (bishop1Pos[0] - bishop1Pos[1]);
    }
  }

  const one = [
    String.fromCharCode(finalPosBishop1[0] - 1 + 'a'.charCodeAt(0)),
    String(finalPosBishop1[1])
  ].join('');

  const two = [
    String.fromCharCode(finalPosBishop2[0] - 1 + 'a'.charCodeAt(0)),
    String(finalPosBishop2[1])
  ].join('');

  return [one, two].sort();
}

// console.log(BishopDiagonal('d7', 'f5'));
console.log(BishopDiagonal('b4', 'e7'));

function BishopDiagonalV2(bishop1: string, bishop2: string): string[] {
  const map = ' abcdefgh';
  const bishop1Pos = [map.indexOf(bishop1[0]), Number(bishop1[1])];
  const bishop2Pos = [map.indexOf(bishop2[0]), Number(bishop2[1])];

  if (bishop1Pos[0] + bishop1Pos[1] === bishop2Pos[0] + bishop2Pos[1]) {
    const edgePos = [...bishop1Pos];

    while (edgePos[0] > 1 && edgePos[1] < 8) {
      edgePos[0]--;
      edgePos[1]++;
    }

    return [
      `${map[edgePos[0]]}${edgePos[1]}`,
      `${map[edgePos[1]]}${edgePos[0]}`
    ];
  }

  if (bishop1Pos[0] - bishop2Pos[0] === bishop1Pos[1] - bishop2Pos[1]) {
    const edgePos = [...bishop1Pos];

    while (edgePos[0] > 1 && edgePos[1] > 1) {
      edgePos[0]--;
      edgePos[1]--;
    }

    const diff = 8 - Math.max(...edgePos);

    return [
      `${map[edgePos[0]]}${edgePos[1]}`,
      `${map[edgePos[0] + diff]}${edgePos[1] + diff}`
    ];
  }

  return [bishop1, bishop2].sort();
}

console.log(BishopDiagonalV2('b4', 'e7'));
