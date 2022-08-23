/**
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer `N`. Write a method that takes the array as an argument and returns this "outlier" `N`.

Examples
```
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```
 */

export function findOutlier(integers: number[]): number {
  function checkParity(i: number) {
    console.log(i & 1);
    // returning 0 means it's even, 1 means it's odd
    return i & 1;
  }
  const firstElParity = checkParity(integers[0]);
  if (firstElParity !== checkParity(integers[1])) {
    if (firstElParity === checkParity(integers[2])) {
      return integers[1];
    }
    return integers[0];
  }
  return integers.find((i) => checkParity(i) !== firstElParity) || 0;
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

export const findOutlierV2 = (integers: number[]): number => {
  // If remainder is 1, then val is added to odds array
  const odds = integers.filter((val) => val % 2);
  // If remainder is !1 (so 0 or falsy values), then val goes to even arr
  const evens = integers.filter((val) => !(val % 2));
  // If odds length is 1 return only element in odds array
  // else it was an odds array so we need to return an even outlier
  return odds.length === 1 ? odds[0] : evens[0];
};

console.log(findOutlierV2([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlierV2([160, 3, 1719, 19, 11, 13, -21]));
