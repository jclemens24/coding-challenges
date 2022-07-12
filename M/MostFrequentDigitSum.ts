/**
 * A step(x) operation works like this: it changes a number x into x - s(x), where s(x) is the sum of x's digits. You like applying functions to numbers, so given the number n, you decide to build a decreasing sequence of numbers: n, step(n), step(step(n)), etc., with 0 as the last element.

Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (s(x)). Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.


You will see two versions here, the second one (without measuring) is sure to be the better performer as V1 uncessarily stores values. For example, if `18` was passed to the `reducer(['1', '8'])` then '1' is stored as a key on obj with a value of 1. After that, the result of `1 + 8`is stored as a key inside obj. However, it still passes all tests and returns the correct answers.

Go to version 2 to read about it.
 */

function MostFrequentDigitSum(n: number): number {
  const obj: { [key: string]: number } = {};
  const reducer = (a: string[]) => {
    return a.reduce((prev, curr) => {
      const total = prev + parseInt(curr, 10);
      if (obj[total]) {
        obj[total]++;
      } else {
        obj[total] = 1;
      }
      return total;
    }, 0);
  };

  while (n > 0) {
    n -= reducer(n.toString().split(''));
  }

  const res = Object.keys(obj).filter((x) => {
    return obj[x] === Math.max.apply(null, Object.values(obj));
  });
  const ifMultipleSequence = [...Object.keys(obj)].reduce(
    (prev, curr) => (prev < +curr ? +curr : +prev),
    0
  );

  return res.length > 1 ? ifMultipleSequence : +res;
}

console.log(MostFrequentDigitSum(88));
console.log(MostFrequentDigitSum(8));
console.log(MostFrequentDigitSum(17));

console.log(`show result of this: `, -~6);

/**
 *
 * @param n
 * @returns {number} - The number whose digit sum appeared the most or, if multiple digit sums appeared the same amount of times, the highest of those numbers
 *
 * Version 2 starts with a similar strategy of using key: value pairs to store occurences. The reducer function spreads a string (so `reducer(18) => ['1', '8']`) and returns `1 + 8 = 9` for example.
 * We loop through starting `i = n`, `while i > 0`, and `i = i - reducer(i)`. You'll notice a little trick I use to track how many times this sum of digits has appeared `(-~)`. `Bitwise NOT` always evaluates to `-(x + 1)`. Starting with `x = 0`, that would be `-(0 + 1) = -1`. Now, we add that `-` sign in and we get `-(-1) = 1`. Think of it as similar to `obj[reducer(i)]++;` If you have `(-~6)` then `= 7`.
 */

function MostFrequentDigitSumV2(n: number): number {
  const dict: { [key: string]: number } = {};
  const reducer = (num: number) =>
    [...`${num}`].reduce((prev, curr) => prev + parseInt(curr), 0);

  for (let i = n; i > 0; i -= reducer(i)) {
    dict[reducer(i)] = -~dict[reducer(i)];
    console.log(...Object.entries(dict));
  }
  return +Object.keys(dict).reduce((prev, curr) =>
    dict[prev] > dict[curr] ? prev : curr
  );
}

console.log(MostFrequentDigitSumV2(88));
console.log(MostFrequentDigitSumV2(8));
console.log(MostFrequentDigitSumV2(17));
