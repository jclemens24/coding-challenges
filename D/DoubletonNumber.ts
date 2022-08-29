/**
 * DESCRIPTION:
We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

Examples:
```
doubleton(120) == 121
doubleton(1234) == 1311
doubleton(10) == 12
```
 */

export function doubleton(n: number): number {
  let result: number = 0;

  for (let i = n + 1; i < 1_000_000; i++) {
    const map: { [key: string]: number } = {};
    const next = i.toString().split('');
    next.forEach((digit) => {
      map[digit] = map[digit] + 1 || 1;
    });
    if (Object.keys(map).length === 2) {
      result = i;
      break;
    }
  }
  return result;
}

console.log(doubleton(120));
console.log(doubleton(1234));
console.log(doubleton(10));

export function doubletonV2(num: number): number {
  while (num++) {
    const digits = String(num).split('');
    if (new Set(digits).size === 2) {
      return Number(digits.join(''));
    }
  }
  return -1;
}

console.log(doubletonV2(120));
console.log(doubletonV2(1234));
console.log(doubletonV2(10));
