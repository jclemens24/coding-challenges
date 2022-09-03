/**
 * DESCRIPTION:
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
```
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
```
 * 
 * 
 * @param code - Any string 
 * @returns The sum of each characters hex value from the code parameter
 */

export function hexHash(code: string): number {
  let hexStr = '';

  for (let i = 0; i < code.length; i++) {
    const alpha = code.charCodeAt(i);
    const hex = alpha.toString(16);
    hexStr += hex;
  }

  const digits = hexStr.match(/\d/g);
  return digits?.reduce((acc, curr) => acc + +curr, 0) || 0;
}

console.log(hexHash('Yo'));
console.log(hexHash('Hello, World!'));

export function hexHashV2(code: string): number {
  return [...code]
    .map((char) => char.charCodeAt(0))
    .map((num) => num.toString(16))
    .map((char) => char.replace(/[^\d]/gi, ''))
    .join('')
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(hexHashV2('Yo'));
console.log(hexHashV2('Hello, World!'));
