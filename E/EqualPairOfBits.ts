/**
 * You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of 2position_of_the_found_pair (0-based).

Example

For n = 10 and m = 11, the output should be
solution(n, m) = 2.

10 (base 10) = 1010(base 2), 11 (base 10) = 1011(base 2), the position of the rightmost pair of equal bits is the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 21 = 2.
 */

function EqualPairOfRightmostBits(n: number, m: number): number {
  console.log('Testing below:');
  console.log(n.toString(2));
  console.log(m.toString(2));
  console.log(n ^ ~m); // Expect -2 (base2) 11111111111111111111111111111110
  return (n ^ ~m) & (~(n ^ ~m) + 1);
}

console.log(EqualPairOfRightmostBits(10, 11));
console.log(EqualPairOfRightmostBits(0, 0));
console.log(EqualPairOfRightmostBits(28, 27));

function EqualPairOfRightmostBitsV2(n: number, m: number): number {
  return ~(n ^ m) & ((n ^ m) + 1);
}

console.log(EqualPairOfRightmostBitsV2(10, 11));
console.log(EqualPairOfRightmostBitsV2(28, 27));
console.log(EqualPairOfRightmostBitsV2(0, 0));
