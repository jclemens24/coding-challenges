/**
 * You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.

The coin values available in Bananaland are stored in a sorted array coins. coins[0] = 1, and for each i (0 < i < coins.length) coins[i] is divisible by coins[i - 1]. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price.
 */

const MinNumOfCoins = (coins: number[], price: number): number => {
  const total: number[] = [];

  for (let i = coins.length - 1; i >= 0; i--) {
    if (price < 1) break;
    const denom = Math.floor(price / coins[i]);
    total.push(denom);
    price -= denom * coins[i];
  }
  return total.reduce((prev, curr) => prev + curr, 0);
};

console.log(MinNumOfCoins([1, 2, 10], 28));
console.log(MinNumOfCoins([1], 8));
console.log(MinNumOfCoins([1, 2, 20, 60, 120], 150));
console.log(MinNumOfCoins([1, 3, 6, 30], 45));

const MinNumOfCoinsV2 = (coins: number[], price: number): number => {
  let total = 0;

  return coins.reverse().reduce(
    (prev, curr) => (
      // eslint-disable-next-line no-sequences
      (total = (price / curr) ^ 0), (price = price % curr), prev + total
    ),
    0
  );
};

console.log(MinNumOfCoinsV2([1, 2, 10], 28));
console.log(MinNumOfCoinsV2([1], 8));
console.log(MinNumOfCoinsV2([1, 2, 20, 60, 120], 150));
console.log(MinNumOfCoinsV2([1, 3, 6, 30], 45));

const MinNumOfCoinsV3 = (coins: number[], price: number): number => {
  let numOfCoins = 0;
  coins = coins.reverse();

  while (price > 0) {
    for (const c of coins) {
      numOfCoins += Math.floor(price / c);
      price %= c;
    }
  }
  return numOfCoins;
};

console.log(MinNumOfCoinsV3([1, 2, 10], 28));
console.log(MinNumOfCoinsV3([1], 8));
console.log(MinNumOfCoinsV3([1, 2, 20, 60, 120], 150));
console.log(MinNumOfCoinsV3([1, 3, 6, 30], 45));
