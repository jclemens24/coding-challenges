/**
 * Let's call `product(x)` the product of `x`'s digits. Given an array of integers `a`, calculate `product(x)` for each `x` in `a`, and return the number of distinct results you get.
 * 
 * Example

For `a = [2, 8, 121, 42, 222, 23]`, the output should be
`solution(a) = 3`.
 */

const UniqueDigitProducts = (a: number[]): number => {
  const b = a.map((num, i) => {
    return num.toString(10).split('').map(Number);
  });

  const c = b.map((num, i) => {
    return num.reduce((prev, curr) => prev * curr);
  });
  const noDups: string[] = c.reduce((prev: string[], curr) => {
    if (prev.indexOf(String(curr)) === -1) {
      prev.push(String(curr));
    }
    return prev;
  }, []);

  return noDups.length;
};

console.log(UniqueDigitProducts([2, 8, 121, 42, 222, 23]));
console.log(UniqueDigitProducts([239]));
console.log(UniqueDigitProducts([100, 101, 111]));
console.log(
  UniqueDigitProducts([100, 23, 42, 239, 22339, 9999999, 456, 78, 228, 1488])
);

const UniqueDigitProductsV2 = (a: number[]): number => {
  return new Set(
    a.map((val) => [...`${val}`].reduce((prev, curr) => prev * +curr, 1))
  ).size;
};

console.log(`-------- Version 2 Below This Line ----------`);
console.log(UniqueDigitProductsV2([2, 8, 121, 42, 222, 23]));
console.log(UniqueDigitProductsV2([239]));
console.log(UniqueDigitProductsV2([100, 101, 111]));
console.log(
  UniqueDigitProductsV2([100, 23, 42, 239, 22339, 9999999, 456, 78, 228, 1488])
);

const UniqueDigitProductsV3 = (a: number[]): number => {
  return new Set(
    a.map((val) =>
      val
        .toString(10)
        .split('')
        .map((str) => Number(str))
        .reduce((prev, curr) => prev * curr)
    )
  ).size;
};

console.log(`-------- Version 3 Below This Line ----------`);
console.log(UniqueDigitProductsV3([2, 8, 121, 42, 222, 23]));
console.log(UniqueDigitProductsV3([239]));
console.log(UniqueDigitProductsV3([100, 101, 111]));
console.log(
  UniqueDigitProductsV3([100, 23, 42, 239, 22339, 9999999, 456, 78, 228, 1488])
);
