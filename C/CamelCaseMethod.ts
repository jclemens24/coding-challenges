/**
 * Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

```
camelCase("hello case"); // => "HelloCase"
camelCase("camel case word"); // => "CamelCaseWord"
```
Don't forget to rate this kata! Thanks :)
 */

export function camelCase(str: string): string {
  if (str.length < 1 || str === '') return '';
  str = str.trim();
  const arr = str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1));
  return arr.join('');
}

console.log(camelCase('hello case'));
console.log(camelCase(' camel case word'));

export function camelCaseV2(str: string): string {
  return str
    .replace(/\b\w/g, (str) => str.toUpperCase())
    .split(' ')
    .join('');
}

console.log(camelCaseV2('hello case'));
console.log(camelCaseV2(' camel case word'));

export function camelCaseV3(str: string): string {
  return str
    .split(' ')
    .reduce(
      (acc, curr) => acc + curr.charAt(0).toUpperCase() + curr.slice(1),
      ''
    );
}

console.log(camelCaseV3('hello case'));
console.log(camelCaseV3(' camel case word'));
