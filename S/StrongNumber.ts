/**
 *
 */

function factorial(n: number): number {
  if (n <= 1) return n;
  return n * factorial(n - 1);
}

export const strongNumber = (num: number): string => {
  const nthNum = num.toString().split('');
  const nthFactorial = nthNum
    .map(Number)
    .map(factorial)
    .reduce((acc, curr) => acc + curr, 0);
  if (nthFactorial === num) {
    return 'STRONG!!!!';
  }
  return 'Not Strong !!';
};

console.log(strongNumber(145));
console.log(strongNumber(123));

export function strongNumberV2(num: number): string {
  return [...`${num}`]
    .map(Number)
    .map(factorial)
    .reduce((acc, curr) => acc + curr, 0) === num
    ? 'STRONG!!!!'
    : 'Not Strong !!';
}

console.log(strongNumberV2(145));
console.log(strongNumberV2(123));
