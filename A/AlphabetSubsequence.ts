/**
 * Check whether the given string is a subsequence of the plaintext alphabet.
 */

const AlphaSubsequence = function (s: string): boolean {
  return s === [...new Set(s)].sort().join('');
};

console.log(AlphaSubsequence('effg'));
console.log(AlphaSubsequence('cdce'));
console.log(AlphaSubsequence('ace'));

const AlphaSubsequenceV2 = function (s: string): boolean {
  let first = s[0];

  return s
    .split('')
    .slice(1)
    .every((v) => {
      if (first >= v) return false;
      first = v;
      return true;
    });
};

console.log(AlphaSubsequenceV2('effg'));
console.log(AlphaSubsequenceV2('cdce'));
console.log(AlphaSubsequenceV2('ace'));

const AlphaSubsequenceV3 = (s: string): boolean => {
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charAt(i) >= s.charAt(i + 1)) return false;
  }
  return true;
};

console.log(AlphaSubsequenceV3('effg'));
console.log(AlphaSubsequenceV3('cdce'));
console.log(AlphaSubsequenceV3('ace'));

const AlphaSubsequenceV4 = (s: string): boolean => {
  return [...s].every((alph, i, arr) => !i || alph > arr[i - 1]);
};

console.log(AlphaSubsequenceV4('effg'));
console.log(AlphaSubsequenceV4('cdce'));
console.log(AlphaSubsequenceV4('ace'));
