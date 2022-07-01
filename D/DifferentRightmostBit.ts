/**
 * You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2^position_of_the_found_bit (0-based).

Example

For `n = 11 and m = 13`, the output should be
`solution(n, m) = 2`.

```11 (base 10) = 1011 (base 2), 13 (base 10) = 1101 (base 2)```, the rightmost bit in which they differ is the bit at position 1 (0-based) from the right in the binary representations.

So the answer is 2^1 = 2.

 */

function DifferentRightMostBit(n: number, m: number): number {
  return Math.pow(
    2,
    [...(n ^ m).toString(2)].reverse().findIndex((val) => {
      const toNum = parseInt(val, 10);
      return toNum === 1;
    })
  );
}

console.log(DifferentRightMostBit(11, 13));
console.log(DifferentRightMostBit(7, 23));

/**
 * Bitwise XOR (^) will give us a number (1) that has set bits only at the position where the bits of n and m differ. From there, we can use the Bitwise AND (&) operator which will return a 1 in each bit position (after executing the XOR) of these 2 operands.
 *
 * ```javascript
 * const c = 6;
 * const d = -6;
 * c.toString(2).padStart(32, '0') //"00000000000000000000000000000110"
 * (d >>> 0).toString(2) // "11111111111111111111111111111010"
 *
 * //"00000000000000000000000000000110" & "11111111111111111111111111111010" will return 2^1 = 2; because a 1 exist in position 1 of both operands (0 based)
 * ```
 * @param n
 * @param m
 * @returns number
 */

function DifferentRightMostBitV2(n: number, m: number): number {
  console.log(n ^ m);
  console.log(-(n ^ m));
  return (n ^ m) & -(n ^ m);
}

console.log(DifferentRightMostBitV2(11, 13));
console.log(DifferentRightMostBitV2(7, 23));
