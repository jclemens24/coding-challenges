/**
 * Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For `inputArray = [2, 3, 5, 1, 6]` and `k = 2`, the output should be
`solution(inputArray, k) = 8`.
All possible sums of 2 consecutive elements are:

```
2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
```
Thus, the answer is 8.

 * 
 * @param a 
 * @param k 
 * @returns 
 */

function ArrayMaxConsecutiveSum(a: number[], k: number): number {
  // Get first 2 elements and add them, set to curr max
  let max = a.slice(0, k).reduce((acc, curr) => acc + curr, 0);
  console.log('max: ', max);
  // prev is max so far
  let prev = max;

  for (let i = k; i < a.length; i++) {
    prev = prev + a[i] - a[i - k];
    console.log('prev: ', prev);
    max = Math.max(max, prev);
  }
  return max;
}

console.log(ArrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
