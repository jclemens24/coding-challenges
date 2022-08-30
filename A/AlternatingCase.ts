/**
 * DESCRIPTION:
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

```
toAlternatingCase("hello world") === "HELLO WORLD"
toAlternatingCase("HELLO WORLD") === "hello world"
toAlternatingCase("hello WORLD") === "HELLO world"
toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
toAlternatingCase("12345") === "12345" // Non-alphabetical characters are unaffected
toAlternatingCase("1a2b3c4d5e") === "1A2B3C4D5E"
toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
```
As usual, your function/method should be pure, i.e. it should not mutate the original string.
 */

export function toAlternatingCase(s: string): string {
  return [...s]
    .map((char) => {
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        return char.toLowerCase();
      }
      return char.toUpperCase();
    })
    .join('');
}

console.log(toAlternatingCase('hello world'));
console.log(toAlternatingCase('HELLO WORLD'));
console.log(toAlternatingCase('HeLLo WoRLD'));
console.log(toAlternatingCase('12345'));

export const toAlternatingCaseV2 = (s: string): string => {
  return [...s]
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join('');
};

console.log(toAlternatingCaseV2('hello world'));
console.log(toAlternatingCaseV2('HELLO WORLD'));
console.log(toAlternatingCaseV2('HeLLo WoRLD'));
console.log(toAlternatingCaseV2('12345'));

export function toAlternatingCaseV3(s: string): string {
  return s.replace(/./g, (x) =>
    /[a-z]/.test(x) ? x.toUpperCase() : x.toLowerCase()
  );
}
