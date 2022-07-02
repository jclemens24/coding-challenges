/**
 * Given an integer `n`, find the minimal `k` such that

```k = m! (where m! = 1 * 2 * ... * m)``` for some integer m;
k >= n.
In other words, find the smallest factorial which is not less than n.

Example

For ```n = 17```, the output should be
```solution(n) = 24```.

```17 < 24 = 4! = 1 * 2 * 3 * 4```, while ```3! = 1 * 2 * 3 = 6 < 17)```.
 */

function LeastFactorial(n: number): number {
  let k = 1;
  let result = 1;

  while (result < n) {
    result *= k;
    k++;
  }
  return result;
}

console.log(LeastFactorial(17));
console.log(LeastFactorial(1));
console.log(LeastFactorial(5));

/* 
We could also just use a for-loop. We initalize `k = 1` and start our for loop `i = 2`. We want to run that for-loop only while k is less than n.

*/

function LeastFactorialV2(n: number): number {
  let k = 1;

  for (let i = 2; k < n; i++) {
    k *= i;
  }
  return k;
}

console.log(LeastFactorialV2(17));
