/**
 * Count the number of divisors of a positive integer `n`.

Random tests go up to `n = 500000`.

Examples (input --> output)
```
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
```
 * @param n 
 * @returns 
 */

export const divisors = (n: number): number => {
  console.log([...Array(n + 1).keys()]);
  return [...Array(n + 1).keys()].filter((x) => n % x === 0).length;
};

console.log(divisors(4));
console.log(divisors(30));
