/**
 * Given the triangle of consecutive odd numbers:
 * 
 * ```
 *              1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```

```
1 -->  1
2 --> 3 + 5 = 8
```
 */

export function rowSumOddNumbers(n: number): number {
  const ret: number[] = [];
  const lowerBound = n * (n - 1) + 1;
  const upperBound = n * (n + 1) - 1;
  for (let i = lowerBound; i <= upperBound; i += 2) {
    ret.push(i);
  }
  return ret.reduce((prev, curr) => prev + curr, 0);
}

console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(13));

export function rowSumOddNumbersV2(n: number): number {
  return Math.pow(n, 3);
}

console.log(rowSumOddNumbersV2(5));
