/**
 * You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character
 *
 * This function is pretty straightforward. We loop through 's' and replace similar letter in t, replacing that with an blank, effectively removing it from t and return what is left over of t after replacements have been identified.
 */

const CreateAnagram = function (s: string, t: string): number {
  for (const str of s) {
    t = t.replace(str, '');
  }
  return t.length;
};

console.log(CreateAnagram('AABAA', 'BBAAA'));
console.log(CreateAnagram('OVGHK', 'RPGUC'));

const CreateAnagramV2 = function (s: string, t: string): number {
  return [...s].reduce((acc, curr) => acc.replace(curr, ''), t).length;
};

console.log(CreateAnagramV2('AABAA', 'BBAAA'));
console.log(CreateAnagramV2('OVGHK', 'RPGUC'));

/**
 * If you have any questions as to how Version 2 works, take a look at what is left over after the console.log below. In V2, we spread s into an array ['A', 'A','B', 'A', 'A'].
 * We give the reduce function an initial value of t = 'BBAAA'.
 * The reducer then reduces the string replacing a matching value from t (acc) with an empty ''
 *
 */

const s = 'AABAA';
const t = 'BBAAA';

console.log(
  [...s].reduce((acc, curr) => {
    console.log(`acc: `, acc);
    console.log(`curr: `, curr);
    return acc.replace(curr, '');
  }, t)
);
