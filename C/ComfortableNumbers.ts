/**
 *Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other (so a feels comfortable with b and b feels comfortable with a)?
 */

function isComfortableNum(l: number, r: number): number {
  let pairs = 0;

  const sum = (n: number) =>
    n
      .toString(10)
      .split('')
      .reduce((acc, curr) => acc + parseInt(curr), 0);

  for (let i = l; i < r; i++) {
    // console.log('i: ', i);
    for (let j = i + 1; j <= r; j++) {
      // console.log('j: ', j);
      if (
        i >= j - sum(j) &&
        i <= j + sum(j) &&
        j >= i - sum(i) &&
        j <= i + sum(i)
      ) {
        pairs++;
      }
    }
  }
  return pairs;
}

console.log(isComfortableNum(10, 12));
console.log(isComfortableNum(1, 9));
console.log(isComfortableNum(13, 13));
