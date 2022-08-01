/**
 *  You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.
 */

const RangeBits = function (a: number, b: number) {
  const numsArr: (string | number)[] = [];
  for (let i = a; i <= b; i++) {
    numsArr.push(i);
  }

  return numsArr.map((val) => val.toString(2).replace(/(0*)/g, '')).join('')
    .length;
};

console.log(RangeBits(2, 7));
console.log(RangeBits(0, 1));
console.log(RangeBits(1, 10));

const ConstructRangeArray = function* (a: number, b: number) {
  let start = a;
  while (start <= b) {
    yield start++;
  }
};

const arry = ConstructRangeArray(2, 7);
const arrrrr2: number[] = [];
for (const value of arry) {
  arrrrr2.push(value);
}
console.log(arrrrr2);
