/**
 * Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
```
minValue ({1, 3, 1})  ==> return (13)
```
 */

export const minValue = (values: number[]): number => {
  const unique = Array.from(new Set(values));

  return +unique
    .sort((a, b) => a - b)
    .reduce((acc, curr) => acc + `${curr}`, '');
};

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([4, 8, 1, 4]));

export const minValueV2 = (values: Array<number>): number => {
  return +[...new Set(values)].sort().join('');
};

console.log(minValueV2([1, 3, 1]));
console.log(minValueV2([4, 7, 5, 7]));
console.log(minValueV2([4, 8, 1, 4]));

export const minValueV3 = (values: Array<number>): number => {
  return Number.parseInt(
    values
      .filter((num, i) => values.indexOf(num) === i)
      .sort()
      .join('')
  );
};

console.log(minValueV3([1, 3, 1]));
console.log(minValueV3([4, 7, 5, 7]));
console.log(minValueV3([4, 8, 1, 4]));
