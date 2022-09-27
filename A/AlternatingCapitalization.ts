/**
 * DESCRIPTION:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
 */

export function capitalize(s: string) {
  let str1: string = '';
  let str2: string = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      str1 += s[i].toUpperCase();
    } else {
      str1 += s[i];
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (j % 2 === 0) {
      str2 += s[j];
    } else {
      str2 += s[j].toUpperCase();
    }
  }

  return [str1, str2];
}

console.log(capitalize('abcdef'));

export function capitalizeV2(s: string) {
  return [
    [...s].map((char, i) => (i % 2 ? char : char.toUpperCase())).join(''),
    [...s].map((char, i) => (i % 2 ? char.toUpperCase() : char)).join('')
  ];
}

console.log(capitalizeV2('abcdef'));
