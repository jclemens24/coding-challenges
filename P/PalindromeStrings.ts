/**
 * Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
```
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false
```
 */

export function isPalindrome(line: string): boolean {
  return line === [...line].reverse().join('');
}

console.log(isPalindrome('anna'));
console.log(isPalindrome('walter'));

export function isPalindromeV2(line: string): boolean {
  return line
    .split('')
    .every((char, i) => char === line.charAt(line.length - i - 1));
}
