/**
 * Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):
```
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
```
 */

export function reverseWords(str: string): string {
  return str.split(' ').reverse().join(' ');
}

console.log(
  reverseWords('The greatest victory is that which requires no battle')
);
