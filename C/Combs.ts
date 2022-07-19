/**
 * Miss X has only two solution in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the solution. The only way they fit is horizontally and without overlapping. Given teeth' positions on both solution, find the minimum length of the purse she needs to take them with her.

It is guaranteed that there is at least one tooth at each end of the comb.
It is also guaranteed that the total length of two strings is smaller than 32.
Note, that the solution can not be rotated/reversed.

Example

For `comb1 = "*..*"` and `comb2 = "*.*"`, the output should be
`solution(comb1, comb2) = 5`.

First, we convert each string to a binary number. For each tooth ('*'), we replace with the value '1'. The resulting string of the comb1.replace() method would look something like `1001`, which is parsed with parseInt utilizing a radix of 2. This is how `combOne = 9`, `because 1001 => 2^3 + 0^2 + 0^1 + 1^0 = 8 + 1 = 9`. After that, we initialize counter vars i and j. We left shift both combOne and CombTwo just like the pictures in the example suggest and then count the "crossing points" between combOne and CombTwo. We return the smallest length of the 2
 */

const Combs = (comb1: string, comb2: string): number => {
  const combOne = parseInt(
    comb1.replace(/./g, (s) => (s === '*' ? '1' : '0')),
    2
  );
  const combTwo = parseInt(
    comb2.replace(/./g, (s) => (s === '*' ? '1' : '0')),
    2
  );

  let i = 0;
  let j = 0;
  while ((combOne << i) & combTwo) {
    i++;
    console.log('iteration i :', i);
  }
  while ((combTwo << j) & combOne) {
    j++;
    console.log('iteration: j', j);
  }
  return Math.min(
    Math.max(comb1.length + i, comb2.length),
    Math.max(comb2.length + j, comb1.length)
  );
};

console.log(Combs('*..*', '*.*'));
