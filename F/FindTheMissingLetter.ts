/** 
 * #Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

```
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
```
 */

export function findMissingLetter(array: string[]): string {
  const asciiNums = array.map((str) => str.charCodeAt(0));

  const missingChar: string[] = [];

  for (let i = 0; i < asciiNums.length; i++) {
    if (asciiNums[i + 1] - asciiNums[i] > 1) {
      missingChar.push(String.fromCharCode(asciiNums[i] + 1));
    }
  }
  return missingChar.join('');
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
