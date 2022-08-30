/**
 * Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: `[1, 5]` is an interval from `1` to `5. The length of this interval is `4`.

Overlapping Intervals
List containing overlapping intervals:
```
[
   [1,4],
   [7, 10],
   [3, 5]
]
```
The sum of the lengths of these intervals is `7`. Since `[1, 4]` and `[3, 5]` overlap, we can treat the interval as `[1, 5]`, which has a length of `4`.

Examples:
```
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030
```
Tests with large intervals
Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range `[-1000000000, 1000000000]`.


Version 2 will fail with large numbers but works like a charm for smaller integer ranges. It was initially my first attempt. Version 1 will pass the large number unit tests on Codewars.
 */

export function sumOfIntervals(intervals: [number, number][]) {
  intervals.sort((a, b) => a[0] - b[0]);

  const newInts = intervals.reduce((acc: any[], curr, i, arr) => {
    const adjacent = arr[i - 1];
    if (arr.length > 1 && adjacent !== undefined) {
      if (curr[0] < acc[acc.length - 1]) {
        if (curr[1] >= acc[acc.length - 1]) {
          acc[acc.length - 1] = curr[1];
        }
      } else {
        acc.push(...curr);
      }
    } else {
      acc.push(...curr);
    }
    return acc;
  }, []);

  let result = 0;
  for (let i = 0; i < newInts.length; i += 2) {
    console.log(newInts);
    result += newInts[i + 1] - newInts[i];
  }
  return result;
}

console.log(
  sumOfIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
  ])
);

console.log(
  sumOfIntervals([
    [1, 2],
    [6, 10],
    [11, 15]
  ])
);

console.log(sumOfIntervals([[-1e9, 1e9]]));

export function sumOfIntervalsV2(intervals: [number, number][]) {
  // Using a set to get distinct numbers and handle overlaps
  const ranges = new Set<number>();
  intervals.forEach(([start, end]) => {
    ranges.add(end - start);
  });
  return ranges.size;
}

export function sumOfIntervalsV3(intervals: [number, number][]) {
  const sorted = intervals.slice().sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  console.log('sorted: %o', sorted);
  let top: number = -Infinity;
  let sum: number = 0;

  for (const [a, b] of sorted) {
    if (top < a) top = a;
    if (top < b) {
      sum += b - top;
      top = b;
    }
  }
  return sum;
}

console.log(
  sumOfIntervalsV3([
    [1, 2],
    [6, 10],
    [11, 15]
  ])
);
