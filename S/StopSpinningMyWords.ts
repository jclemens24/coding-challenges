/**
 *Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

```
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
```
 */

export function spinWords(words: string): string {
  return words
    .split(/\s/g)
    .map((word) => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      }
      return word;
    })
    .join(' ');
}

console.log(spinWords('Hey fellow warriors'));

// Another way to solve this problem would be to use a replacer function

export function spinWordsV2(words: string): string {
  return words.replace(/[a-z]{5,}/gi, (s) => [...s].reverse().join(''));
}

console.log(spinWordsV2('Hey fellow warriors'));

export function spinWordsV3(words: string): string {
  const reverseStr = (str: string): string => {
    return str === '' ? '' : reverseStr(str.substring(1)) + str.charAt(0);
  };

  return words
    .split(' ')
    .map((word) => (word.length >= 5 ? reverseStr(word) : word))
    .join(' ');
}

console.log(spinWordsV3('Hey fellow warriors'));
