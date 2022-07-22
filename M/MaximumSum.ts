/**
 * You are given an array of integers a. A range sum query is defined by a pair of non-negative integers l and r (l <= r). The output to a range sum query on the given array a is the sum of all the elements of a that have indices from l to r, inclusive.

You have the array a and a list of range sum queries q. Find an algorithm that can rearrange the array a in such a way that the total sum of all of the query outputs is maximized, and return this total sum.

Example

For `a = [9, 7, 2, 4, 4]` and `q = [[1, 3], [1, 4], [0, 2]]`, the output should be
`solution(a, q) = 62`.
 */

function MaxSum(a: number[], q: number[][]): number {
  a.sort((a, b) => a - b);
  const sumsObj = a.map((_, i) => ({
    i,
    count: q.reduce(
      (prev, curr) => prev + (i >= curr[0] && i <= curr[1] ? 1 : 0),
      0
    )
  }));
  sumsObj.sort((a, b) => b.count - a.count);
  const ret = Array<number>(sumsObj.length);
  for (let i = 0; i < sumsObj.length; i++) {
    ret[sumsObj[i].i] = a.pop()! * sumsObj[i].count;
  }
  return ret.reduce((prev, curr) => prev + curr);
}

console.log(
  MaxSum(
    [9, 7, 2, 4, 4],
    [
      [1, 3],
      [1, 4],
      [0, 2]
    ]
  )
);
