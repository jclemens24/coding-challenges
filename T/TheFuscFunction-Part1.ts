/**
 * DESCRIPTION:
The fusc function is defined recursively as follows:

```
1. fusc(0) = 0
2. fusc(1) = 1
3. fusc(2 * n) = fusc(n)
4. fusc(2 * n + 1) = fusc(n) + fusc(n + 1)
```

The 4 rules above are sufficient to determine the value of fusc for any non-negative input n. For example, let's say you want to compute fusc(10).

fusc(10) = fusc(5), by rule 3.
fusc(5) = fusc(2) + fusc(3), by rule 4.
fusc(2) = fusc(1), by rule 3.
fusc(1) = 1, by rule 2.
fusc(3) = fusc(1) + fusc(2) by rule 4.
fusc(1) and fusc(2) have already been computed are both equal to 1.
Putting these results together fusc(10) = fusc(5) = fusc(2) + fusc(3) = 1 + 2 = 3

Your job is to produce the code for the fusc function. In this kata, your function will be tested with small values of n, so you should not need to be concerned about stack overflow or timeouts.

Hint: Use recursion.

When done, move on to Part 2.
 */

performance.mark('fusc-v1-start');
export function fusc(n: number): number {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n % 2 === 0) {
    return fusc(n / 2);
  } else {
    return fusc(Math.floor(n / 2)) + fusc(Math.floor(n / 2) + 1);
  }
}
performance.mark('fusc-v1-end');
console.log(fusc(0));
console.log(fusc(1));
console.log(fusc(85));
performance.measure('fusc-v1', 'fusc-v1-start', 'fusc-v1-end');

// Refactoring the fusc function

performance.mark('fusc-v2-start');
export function fuscV2(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }
  if (n % 2 === 0) {
    return fusc(n / 2);
  }
  return fusc((n - 1) / 2) + fusc((n + 1) / 2);
}
performance.mark('fusc-v2-end');
console.log(fuscV2(0));
console.log(fuscV2(1));
console.log(fuscV2(85));
performance.measure('fusc-v2', 'fusc-v2-start', 'fusc-v2-end');

// Using switch statement for testing

performance.mark('fusc-v3-start');
export function fuscV3(n: number): number {
  switch (true) {
    case n < 2:
      return n;
    case n % 2 === 0:
      return fusc(n / 2);
    case n % 2 === 1:
      return fusc((n - 1) / 2) + fusc((n + 1) / 2);
    default:
      throw new Error('Invalid Input');
  }
}
performance.mark('fusc-v3-end');
console.log(fuscV3(0));
console.log(fuscV3(1));
console.log(fuscV3(85));
performance.measure('fusc-v3', 'fusc-v3-start', 'fusc-v3-end');

const entries = performance.getEntries();

entries.forEach((entry) => {
  if (entry.entryType === 'mark') {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  }
  if (entry.entryType === 'measure') {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
