/**
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 * 
 * Examples:
 * 
 * ```
 * "din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
```
 */

export function duplicateEncode(word: string) {
  const letterMap: { [key: string]: number } = {};
  const normalizeWord = word.toLowerCase();
  const letters = normalizeWord.split('');
  letters.forEach((letter) => {
    letterMap[letter] = (letterMap[letter] || 0) + 1;
  });

  return letters
    .map((ltr) => {
      return letterMap[ltr] === 1 ? '(' : ')';
    })
    .join('');
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));

// A more functional approach would look like

export function duplicateEncodeV2(word: string): string {
  return word
    .toLowerCase()
    .split('')
    .map((letter, i, wordArr) => {
      return wordArr.indexOf(letter) === wordArr.lastIndexOf(letter)
        ? '('
        : ')';
    })
    .join('');
}

console.log(duplicateEncodeV2('din'));
console.log(duplicateEncodeV2('recede'));
