/**
 *An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
```
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
```
 */

export function isIsogram(str: string): boolean {
  const set = new Set(str.toLowerCase());
  return set.size === str.length;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));

export function isIsogramV2(str: string): boolean {
  return !str.match(/([a-z]).*\1/i);
}

console.log(isIsogramV2('Dermatoglyphics'));
console.log(isIsogramV2('aba'));
console.log(isIsogramV2('moOse'));
