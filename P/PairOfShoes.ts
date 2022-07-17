/**
 * Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

  1. type indicates if it's a left or a right shoe;
  2. size is the size of the shoe.

Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Most of these solution versions are similar in how they accomplish this task but nonetheless, I included them. The most intuitive is Version3, IMHO and is inspired from version 2...breaking down the for..of loop into a destructured variable.
 */

const PairOfShoes = (shoes: number[][]): boolean => {
  const pairs: { [key: string]: number } = {};

  for (let i = 0; i < shoes.length; i++) {
    pairs[shoes[i][1]] = pairs[shoes[i][1]] || 0;
    pairs[shoes[i][1]] += shoes[i][0] === 1 ? 1 : -1;
  }
  return !Object.keys(pairs).some((pair) => pairs[pair] !== 0);
};

console.log(
  PairOfShoes([
    [0, 21],
    [1, 23],
    [1, 21],
    [0, 23]
  ])
);

console.log(
  PairOfShoes([
    [0, 21],
    [1, 23],
    [1, 21],
    [1, 23]
  ])
);

const PairOfShoesV2 = (shoes: number[][]): boolean => {
  const pairs: { [key: string]: number } = Object.create({});

  for (const pair of shoes) {
    if (pairs[pair[1]] === undefined) pairs[pair[1]] = 0;
    if (pair[0]) pairs[pair[1]]++;
    else pairs[pair[1]]--;
  }
  console.log(pairs);
  return Object.values(pairs).every((e) => e === 0);
};

console.log(
  PairOfShoesV2([
    [0, 21],
    [1, 23],
    [1, 21],
    [0, 23]
  ])
);

const PairOfShoesV3 = (shoes: number[][]): boolean => {
  const pairs: { [key: string]: number } = {};

  for (const [shoe, size] of shoes) {
    if (!(size in pairs)) pairs[size] = 0;
    pairs[size] += shoe ? 1 : -1;
  }
  console.log('pairs: %o', pairs);
  return Object.values(pairs).every((pair) => pair === 0);
};

console.log(
  PairOfShoesV3([
    [0, 21],
    [1, 23],
    [1, 21],
    [0, 23]
  ])
);
