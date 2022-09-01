/**
 * The vowel substrings in the word `codewarriors` are `o,e,a,io`. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
 */

export function solve(s: string) {
  const vowels = s.match(/[aeiou]+/gi);
  console.log('vowels: %o', vowels);
  if (vowels) {
    return vowels.reduce(
      (acc, curr) => (acc > curr.length ? acc : curr.length),
      vowels[0].length || 0
    );
  }
  return 0;
}

console.log(solve('codewarriors'));
console.log(solve('suoidea'));
console.log(solve('ultrarevolutionariees'));

/* Additionally, we could use the Math.max() method to evaluate our strings with spread operator, mapping each match to it's length
 */

export function solveV2(s: string): number {
  return Math.max(
    ...(s.match(/[aeiou]+/gi) || []).map((match) => match.length)
  );
}

console.log(solveV2('codewarriors'));
console.log(solveV2('suoidea'));
console.log(solveV2('ultrarevolutionariees'));
