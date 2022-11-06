/**
 * DESCRIPTION:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
 */

export const reverseSequence = (n: number): number[] => {
  return Array.from({ length: n }, (_, k) => k + 1).reverse();
};

console.log(reverseSequence(5));

export const reverseSequenceV2 = (n: number): number[] => {
  return Array.from({ length: n }, (_, k) => n - k);
};

console.log(reverseSequenceV2(5));

export const reverseSequenceV3 = (n: number): number[] => {
  const reversed = [];
  for (let i = n; i > 0; i--) {
    reversed.push(i);
  }
  return reversed;
};
