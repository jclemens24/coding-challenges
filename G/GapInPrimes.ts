/**
 *
 */

export const gap = (g: number, m: number, n: number): number[] | null => {
  // Use Bitwise to check if number is odd

  if (g & 1) {
    if (m > 2 || n < g + 2) {
      return null;
    }
    return checkIsPrime(g + 2) ? [2, g + 2] : null;
  }
  let prev: number = 0;

  for (let curr = m | 1; curr <= n; curr += 2) {
    if (checkIsPrime(curr)) {
      if (curr - prev === g) {
        return [prev, curr];
      }
      prev = curr;
    }
  }
  return null;
};

const checkIsPrime = (int: number): boolean => {
  if (int <= 6) {
    return int === 2 || int === 3 || int === 5;
  }
  if (int === 0 || int % 3 === 0) {
    return false;
  }
  const limit = Math.floor(Math.sqrt(int));

  for (let i = 5; i <= limit; i += 6) {
    if (int % i === 0 || int % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

console.log(gap(2, 5, 7));
console.log(gap(4, 130, 200));
