/**
 * N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?
 */

const SwitchLights = (a: number[]): number[] => {
  let total = a.reduce((prev, curr) => prev + curr, 0);

  return a.map((candle) => {
    if (candle === 1) total--;
    return total % 2;
  });
};

console.log(SwitchLights([1, 1, 1, 1, 1]));

const SwitchLightsV2 = (a: number[]): number[] => {
  let counter = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === 1) {
      counter++;
    }
    a[i] = (a[i] + counter) % 2;
  }
  return a;
};

console.log(SwitchLightsV2([1, 1, 1, 1, 1]));
