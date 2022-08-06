/**
 * Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:

```
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```
 */

export const longest = (s1: string, s2: string): string => {
  const strs = s1.concat(s2);
  return [...new Set(strs)].sort((a, b) => a.localeCompare(b)).join('');
};

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
