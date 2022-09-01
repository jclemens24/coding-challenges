/**
 * Let us define two sums v(n, p) and u(n, p):

Task:
Calculate v(n, p) and u(n, p) with two brute-force functions v1(n, p) and u1(n, p).
Try v1(n, p) and u1(n, p) for small values of n and p and guess the results of u(n, p) and v(n, p)
Using 2) write v_eff(n, p) and u_eff(n, p) (or vEff(n, p) and uEff(n, p) or v-eff(n, p) and u-eff(n, p)) to efficiently calculate v and u for bigger values of n and p.
-- (This third part is not tested in

 JS, CS, TS, C++, C, PHP, Crystal, Rust, Swift, R, Nim, Fortran, NASM, Haxe, Pascal, Lua since there you don't have big integers to control your guess in part 2. See note below for "Shell").
 
Examples:
v1(12, 70) --> 1750
u1(13, 18) --> 252
Extra points:-)
For the mathy ones: find a relation between v(n, p), v(n-1, p) and u(n-1, p) :-)

Notes
Erlang, Prolog: only uEff(u_eff) and vEff(v_eff) are tested.

Factor: only ueff and veff are tested.

Forth: only ueff and veff are tested with small numbers.

Shell: only v1(n, p)is tested (use the solution you find for v_eff(n, p).

If you have found u_eff(n, p) and v_eff(n, p) you can use them to calculate u(n, p) and v(n, p).

You could see: https://en.wikipedia.org/wiki/Binomial_coefficient for a refresh about binomial coefficients.
 */

const factorial = (num: number): number => {
  if (num === 1 || num === 0) return 1;
  return num * Math.round(factorial(num - 1));
};

export function v1(n: number, p: number): number {
  let sum: number = 0;

  for (let k = 0; k <= n; k++) {
    const routine = Math.pow(-1, k) * p * Math.pow(4, n - k);
    const series = n * 2 - k;
    sum +=
      routine * (factorial(series) / (factorial(series - k) * factorial(k)));
  }
  return Math.round(sum);
}

export function u1(n: number, p: number): number {
  let sum: number = 0;

  for (let k = 0; k <= n; k++) {
    const routine = Math.pow(-1, k) * p * Math.pow(4, n - k);
    const series = n * 2 - k + 1;
    sum +=
      routine * (factorial(series) / (factorial(series - k) * factorial(k)));
  }
  return Math.round(sum);
}

console.log(v1(12, 70));
console.log(u1(13, 18));

/* 
I guess the simplified version is here below. This is not my own solution.
*/

export function v1V1(n: number, p: number): number {
  return (2 * n + 1) * p;
}

export function u1V1(n: number, p: number): number {
  return (n + 1) * p;
}

console.log(u1V1(13, 18));
console.log(v1V1(12, 70));
