/**
 * Presented with the integer ```n```, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

Return the value of ```2position_of_the_found_bit.```
 */

const GetZeroBit = function (n: number): number {
  return ~(n |= n + 1) & (n + 1);
};
GetZeroBit(37);
console.log((37).toString(2));
console.log((38).toString(2));
console.log((-40 >>> 0).toString(2));

/**
 * Flip The Bits
 *
 * Convert a given int to 32-bit unsigned int , flip its datum (if a 0 is in position 3, flip it to 1), and return its base10 value
 */

const FlippinBits = function (num: number): void {
  const bin = num.toString(2);
  let result = '';
  console.log(`in binary: `, bin);

  for (let i = 0; i < bin.length; i++) {
    result += bin[i] === '0' ? '1' : '0';
  }
  console.log(result);
  console.log(parseInt(result, 2));
};

// FlippinBits(10);
FlippinBits(9);
