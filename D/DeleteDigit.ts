/**
 * Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
 *
 * Ex: for n = 152, the output should be = 52
 * @param n - integer
 */

function DeleteDigit(n: number): number {
  const s = n.toString();
  return Math.max(
    ...Array(s.length)
      .fill(0)
      .map((_v, i) => parseInt(s.slice(0, i) + s.slice(i + 1), 10))
  );
}

console.log(DeleteDigit(10));
console.log(DeleteDigit(152));
console.log(DeleteDigit(222219));
console.log(DeleteDigit(109));
console.log(DeleteDigit(222250));
