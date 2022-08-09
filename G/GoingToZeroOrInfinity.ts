/** 
 * Consider the following numbers (where n! is factorial(n)):
```
u1 = (1 / 1!) * (1!)
u2 = (1 / 2!) * (1! + 2!)
u3 = (1 / 3!) * (1! + 2! + 3!)
...
un = (1 / n!) * (1! + 2! + 3! + ... + n!)
Which will win: 1 / n! or (1! + 2! + 3! + ... + n!)?
```

Are these numbers going to 0 because of 1/n! or to infinity due to the sum of factorials or to another number?

Task
Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n, where n is an integer greater or equal to 1.

To avoid discussions about rounding, return the result truncated to 6 decimal places, for example:
```
1.0000989217538616 will be truncated to 1.000098
1.2125000000000001 will be truncated to 1.2125```
*/

// Note: GoingOne was my original submission but added the other versions for clarity.
// 1e6 is scientific notation => 1 * 10 ^ 6 = 1_000_000;

export function going(n: number): number {
  let denom = 1;
  let result = 1;

  while (--n) {
    console.log('n', n);
    result += 1 / (denom = denom * (n + 1));
  }
  return Math.trunc(result * 1_000_000) / 1_000_000;
}

console.log(going(5));
console.log(going(6));
console.log(going(7));

export const goingV2 = (n: number) => {
  let sum = 0n;
  let fact = 1n;
  for (let i = 1; i <= n; i++) sum += fact *= BigInt(i);
  const num = Number((sum * BigInt(1e300)) / fact) / 1e300;
  return Math.trunc(num * 1e6) / 1e6;
};

console.log(goingV2(7));

export function goingOne(n: number): number {
  const factorial = (num: number): number => {
    if (num === 0) return 1;
    else return num * factorial(num - 1);
  };
  const numerator = 1 / factorial(n);
  const arr = Array.from({ length: n }, (_, k) => k + 1);
  const denominator = arr.reduce((prev, curr) => prev + factorial(curr));
  const answer = numerator * denominator;
  return Math.trunc(answer * 1e6) / 1e6;
}

console.log(goingOne(5));
console.log(goingOne(6));
console.log(goingOne(7));
