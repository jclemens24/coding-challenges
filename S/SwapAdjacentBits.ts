/**
 *  You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.
 */

const SwapAdjacentBits = function (n: number): number {
  // eslint-disable-next-line prettier/prettier
  return ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1);
};

console.log(SwapAdjacentBits(13));
console.log(SwapAdjacentBits(74));
console.log(SwapAdjacentBits(83748));

const SwapAdjacentBitsV2 = function (n: number): number {
  const binArr: (string | number)[] = n.toString(2).split('');

  // If length of array is odd
  if (binArr.length % 2) {
    binArr.unshift(0);
  }

  for (let i = 0; i < binArr.length - 1; i += 2) {
    [binArr[i], binArr[i + 1]] = [binArr[i + 1], binArr[i]];
  }

  // return +('0b' + binArr.join(''));
  return parseInt(binArr.join(''), 2);
};

console.log(SwapAdjacentBitsV2(13));
console.log(SwapAdjacentBitsV2(83748));
