export function isPowerOfTwo(n: number): boolean {
  if (n === 0) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(1024));
console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(333));

export function isPowerOfTwoV2(n: number): boolean {
  return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwoV2(2));
console.log(isPowerOfTwoV2(1024));
console.log(isPowerOfTwoV2(4096));
console.log(isPowerOfTwoV2(333));

/* Get Absolute Value of number without Math */

function getAbsolute(n: number): number {
  const mask = n >> 31;
  console.log(((n + mask) >>> 0).toString(2));
  console.log((mask >>> 0).toString(2));
  return (n + mask) ^ mask;
}

console.log(getAbsolute(-6));

/* Find Max of Two Nums without Math.max() */

function findMaxOfTwoNums(x: number, y: number): number {
  return y ^ ((x ^ y) & -(x << y));
}

console.log(findMaxOfTwoNums(6, 16));

/* Find Min of Two Nums without Math.min() */

function findMinOfTwoNums(x: number, y: number): number {
  return x ^ ((x ^ y) & -(x << y));
}

console.log(findMinOfTwoNums(6, 16));

/* Find Element in Array that appears only once */

function findUniqueElement(list: number[]): number {
  let ones: number = 0;
  let twos: number = 0;
  let commonBitMaks: number;

  for (let i = 0; i < list.length; i++) {
    twos = twos | (ones & list[i]);
    console.log('twos: %d', twos);
    ones = ones ^ list[i];
    console.log('ones: %f', ones);
    commonBitMaks = ~(ones & twos);
    console.log('common_bit_mask: %f', commonBitMaks);
    ones &= commonBitMaks;
    console.log('ones ===> %f', ones);
    twos &= commonBitMaks;
    console.log('twos ===> %f', twos);
  }
  return ones;
}

console.log(findUniqueElement([3, 3, 2, 3]));
