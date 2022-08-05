/**
 * Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

Define a string reflection as the result of applying the alphabet reflection to each of its characters.

Reflect the given string.

Looking at Version 2. If you are wondering how I came up with the number 219, to subtract each letter charCodeAt(), I simply took the ASCII Decimal of last letter in the alphabet, z = 122, and added it to the first letter , a = 97. 122 + 97 = 219. The String.prototype.fromCharChode() constructs a string of the given codes.
@link {https://www.asciitable.com/}
 */

function ReflectString(inputString: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const reflection = alphabet.split('').reverse().join('');
  const ret: string[] = [];

  for (const ltr of inputString) {
    const ref = alphabet.indexOf(ltr);
    ret.push(reflection.slice(ref, ref + 1));
  }
  return ret.join('');
}

console.log(ReflectString('name'));
console.log(ReflectString('abyz'));

function ReflectStringV2(inputString: string): string {
  return inputString
    .split('')
    .map((ltr) => String.fromCharCode(219 - ltr.charCodeAt(0)))
    .join('');
}

console.log(ReflectStringV2('name'));
console.log(ReflectStringV2('abyz'));

function ReflectStringV3(inputString: string): string {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return inputString
    .split('')
    .map((ltr) => alpha[25 - alpha.indexOf(ltr)])
    .join('');
}

console.log(ReflectStringV3('name'));
console.log(ReflectStringV3('abyz'));
