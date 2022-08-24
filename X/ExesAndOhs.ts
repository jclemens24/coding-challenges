/**
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```
 */

export function xo(str: string) {
  str = str.toLowerCase();
  const exes: string[] = [];
  const ohs: string[] = [];

  for (const char of str) {
    if (char === 'x') exes.push(char);
    if (char === 'o') ohs.push(char);
  }
  if (!exes.length && !ohs.length) {
    return true;
  }
  return exes.length === ohs.length;
}

console.log(xo('ooxx'));
console.log(xo('xooxx'));
console.log(xo('zpzpzpp'));

export function xoV2(str: string): boolean {
  return (str.match(/o/gi) || []).length === (str.match(/x/gi) || []).length;
}

console.log(xoV2('ooxx'));
console.log(xoV2('xooxx'));
console.log(xoV2('zpzpzpp'));

type XsAndOs = {
  x: number;
  o: number;
};

export function xoV3(str: string): boolean {
  const counter = str
    .toLowerCase()
    .split('')
    .reduce(
      (acc: XsAndOs, curr) => ({
        ...acc,
        [curr]: (acc[curr] || 0) + 1
      }),
      { x: 0, o: 0 }
    );

  return counter.x === counter.o;
}

console.log(xoV3('ooxx'));
console.log(xoV3('xooxx'));
console.log(xoV3('zpzpzpp'));
