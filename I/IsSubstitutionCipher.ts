/** 
 * A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

The keyword for this problem, at least for me, was "...replaced with corresponding (i.e. having the same index) letter of some ciphertext alphabet." From there, as you can tell I spread string1 into an array and use the every method to check whether all tests pass or not. Don't forget that indexOf returns the position of the first occurrence of the substring it searches for. Let's say we are on the second iteration of the .every() method, so i = 1. In string1, string1[1] = 'd'. I am pretty certain that the first occurrence, so string1[0], is the first occurence of 'd' and is used again even on the second iteration. The same can be said for string2.
*/

const IsSubCipher = function (string1: string, string2: string): boolean {
  return [...string1].every(
    (_, i) => string1.indexOf(string1[i]) === string2.indexOf(string2[i])
  );
};

console.log(IsSubCipher('ddcc', 'zzxx'));
console.log(IsSubCipher('dccd', 'zzxx'));

// function isSubCipherView(string1: string, string2: string): void {
//   for (let i = 0; i < string1.length; i++) {
//     console.log('string1: ', string1.indexOf(string1[i]));
//     console.log('string2: ', string2.indexOf(string2[i]));
//     console.log(string1.indexOf(string1[i]) === string2.indexOf(string2[i]));
//   }
// }

// console.log(isSubCipherView('ddcc', 'zzxx'));
// console.log(isSubCipherView('dccd', 'zzxx'));

function IsSubCipherV2(string1: string, string2: string): boolean {
  const [str1, str2] = [string1, string2].map((str) =>
    [...str].map((col) => str.indexOf(col)).join('')
  );
  return str1 === str2;
}

console.log(IsSubCipherV2('ddcc', 'zzxx'));
console.log(IsSubCipherV2('dccd', 'zzxx'));
