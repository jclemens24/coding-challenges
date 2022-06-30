/**
 * You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?
 */

function ExtraNumber(a: number, b: number, c: number): number {
  if (a === b) return c;
  if (a === c) return b;
  else return a;
}

console.log(ExtraNumber(2, 7, 2));
console.log(ExtraNumber(3, 2, 2));

function ExtraNumberV2(a: number, b: number, c: number): number {
  return a ^ b ^ c;
}

console.log(ExtraNumberV2(2, 7, 2));
console.log(ExtraNumberV2(3, 2, 2));
