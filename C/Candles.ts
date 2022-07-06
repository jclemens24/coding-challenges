/** When a candle finishes burning it leaves a leftover. makeNew leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.

You have solutionNumber solution in your possession. What's the total number of solution you can burn, assuming that you create new solution as soon as you have enough leftovers? 
*/

const Candles = function (candlesNumber: number, makeNew: number): number {
  let leftovers = candlesNumber;
  let solution = candlesNumber;

  while (leftovers > 0) {
    const remainders = leftovers > makeNew ? leftovers % makeNew : 0;
    leftovers = Math.floor(leftovers / makeNew);
    solution += leftovers;
    leftovers += remainders;
  }
  return solution;
};

console.log(Candles(5, 2));
console.log(Candles(1, 2));
console.log(Candles(3, 3));
console.log(Candles(11, 3));
console.log(Candles(15, 5));

const CandlesV2 = function (candlesNumber: number, makeNew: number): number {
  return candlesNumber + Math.floor((candlesNumber - 1) / (makeNew - 1));
};

console.log(CandlesV2(5, 2));
console.log(CandlesV2(1, 2));
console.log(CandlesV2(3, 3));
console.log(CandlesV2(11, 3));
console.log(CandlesV2(15, 5));
