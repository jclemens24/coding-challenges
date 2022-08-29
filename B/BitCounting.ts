/**
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of `1234` is `10011010010`, so the function should return `5` in this case
 */

export function countBits(n: number): number {
  return n
    .toString(2)
    .split('')
    .filter((b) => b === '1').length;
}

console.log(countBits(1234));
console.log(countBits(0));

export function countBitsV2(n: number): number {
  return n.toString(2).replace(/0/g, '').length;
}

console.log(countBitsV2(1234));
console.log(countBitsV2(0));

export function countBitsV3(n: number): number {
  return n.toString(2).match(/1/g)?.length || 0;
}

console.log(countBitsV3(1234));
console.log(countBitsV3(0));

export function countBitsV4(n: number): number {
  return [...n.toString(2)].map(Number).filter(Boolean).length;
}

console.log(countBitsV4(1234));
console.log(countBitsV4(0));
