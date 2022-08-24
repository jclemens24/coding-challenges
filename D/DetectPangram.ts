/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

export const isPangram = (phrase: string): boolean => {
  // get all letters of alphabet into an array
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // lowercase all letters in the phrase parameter
  phrase = phrase.toLowerCase();
  // test if every element in alphabet array is somewhere in phrase
  return alphabet.every((char) => phrase.includes(char));
};

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('This is not a pangram.'));

export const isPangramV2 = (phrase: string): boolean => {
  const alpha = new Set(phrase.toLowerCase().match(/[a-z]/g));
  return alpha.size === 26;
};

console.log(isPangramV2('The quick brown fox jumps over the lazy dog'));
console.log(isPangramV2('This is not a pangram.'));

export const isPangramV3 = (phrase: string): boolean => {
  const alphaDict: { [key: string]: number } = {};
  phrase = phrase.toLowerCase().replace(/[^a-z]/g, '');
  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i];
    if (!alphaDict[char]) {
      alphaDict[char] = 1;
    }
  }
  const alphaKeys = Object.keys(alphaDict);
  return alphaKeys.length === 26;
};

console.log(isPangramV3('The quick brown fox jumps over the lazy dog'));
console.log(isPangramV3('This is not a pangram.'));

export const isPangramV4 = (phrase: string): boolean => {
  /* Change the way we create our alphabet array by destructuring the length and then using the MapFn parameter to create the element */
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  );
  console.log(alphabet);
  phrase = phrase.toLowerCase().replace(/[^a-z]/g, '');
  return alphabet.every((char) => phrase.includes(char));
};

console.log(isPangramV4('The quick brown fox jumps over the lazy dog'));
