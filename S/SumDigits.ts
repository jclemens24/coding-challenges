export function sumDigits(n: number): number {
  return Math.abs(n)
    .toString(10)
    .split('')
    .reduce((acc, curr) => acc + +curr, 0);
}

console.log(sumDigits(-32));
