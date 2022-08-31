/**
 * Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

Example:

`13013` has factors: `[ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]`

Hence the asnwer will be `2 (=13-11)`
 */

export function minDistance(n: number): number {
  const arr: number[] = [1];

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  let min: number = Infinity;
  for (let i = 0; i < arr.length; i++) {
    const sum = Math.abs(arr[i] - arr[i + 1]);
    if (sum < min) {
      min = sum;
    }
  }
  return min;
}

console.log(minDistance(13013));
performance.mark('version-1-start');
console.log(minDistance(218683));
performance.mark('version-1-end');

performance.measure('measurev1', {
  start: 'version-1-start',
  end: 'version-1-end'
});
// Here is a more condensed version that's better performer
// Lol, I am wrong, V2 is actually slower than V1 by a whole 1/2 second.

export function minDistanceV2(n: number): number {
  let min: number = Infinity;
  let prev: number = 1; // 1 is always first factor

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      min = Math.min(i - prev, min);
      prev = i;
    }
  }
  return min;
}

console.log(minDistanceV2(13013));
performance.mark('version-2-start');
console.log(minDistanceV2(218683));
performance.mark('version-2-end');
performance.measure('measurev2', {
  start: 'version-2-start',
  end: 'version-2-end'
});
console.log(performance.getEntriesByType('measure'));
