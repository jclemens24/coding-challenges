/**
 * You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

The first element of the array occupies the first 8 bits of M;
The second element occupies next 8 bits, and so on.
Return the obtained integer M.

Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.
 */

function ArrayPacking(a: number[]): number {
  return parseInt(
    a
      .reverse()
      .map((val) => val.toString(2).padStart(8, '0'))
      .join(''),
    2
  );
}

console.log(ArrayPacking([24, 85, 0]));

console.log(ArrayPackingV2([24, 85, 0]));

function ArrayPackingV2(a: number[]): number {
  return a.reduce((acc, curr, i) => acc + curr * Math.pow(256, i));
}

function ArrayPackingV3(a: number[]): number {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total += a[i] << (8 * i);
    console.log(`Iteration: ${i}: `, total);
  }
  return total;
}

console.log(ArrayPackingV3([24, 85, 0]));
console.log((24).toString(2));
