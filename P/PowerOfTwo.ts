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
