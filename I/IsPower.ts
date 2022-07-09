/**
 * Determine if the given number is a power of some non-negative integer.
 */

// const isPower = function (n: number): boolean {
//   if (n === 1) return true;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     for (let j = 2; i ** j < n; j++) {
//       if (i ** j === n) return true;
//     }
//   }
//   return false;
// };

const isPower = function (n: number): boolean {
  if (n === 1) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    // console.log(`i: ${i}`);
    for (let j = 2; i ** j <= n; j++) {
      // console.log(`j: ${j}`);
      if (Math.pow(i, j) === n) {
        return true;
      }
    }
  }
  return false;
};

console.log(isPower(125));
console.log(isPower(72));

const Testing = function (n: number): void {
  console.log(
    [...Array(((n ** 0.5) ^ 0) - 1).keys()].some((val) =>
      Number.isInteger(+(Math.log(n) / Math.log(val + 2)).toFixed(5))
    ) || n === 1
  );

  const limit = Math.sqrt(n);
  const logN = Math.log(n);

  for (let i = 2; i <= limit; i++) {
    const logI = Math.log(i);

    if ((logN / logI) % 1 < 1e-5) {
      console.log(true);
      console.log(1e-5);
    }
  }
};

Testing(125);
