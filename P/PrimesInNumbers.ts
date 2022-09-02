/* eslint-disable no-var */
/**
 * DESCRIPTION:
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

```
 "(p1**n1)(p2**n2)...(pk**nk)"
```
with the p(i) in increasing order and n(i) empty if n(i) is 1.
```
Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
```
 */

export const primeFactors = (n: number): string => {
  const primes: Array<number> = [];

  while (n > 1) {
    const divisor: number = getPrime(n);
    n /= divisor;
    primes.push(divisor);
  }

  return buildString(primes);
};

const buildString = (list: Array<number>): string => {
  let result: string = '';
  const numDictionary: Record<string, number> = {};

  list.forEach((num) => {
    numDictionary[num] = numDictionary[num] + 1 || 1;
  });

  Object.keys(numDictionary).forEach((key) => {
    if (numDictionary[key] > 1) result += `(${key}**${numDictionary[key]})`;
    else result += `(${key})`;
  });
  return result;
};

const getPrime = (n: number): number => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return i;
    }
  }
  return n;
};

console.log(primeFactors(86240));
