/**
 * Consider two following representations of a non-negative integer:

A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;

An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.

Additionally, both representations may contain underscore (_) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.

Your task is to determine whether the given string is a valid integer representation.

Note: this is how integer numbers are represented in the programming language Ada.
 */

const Ada = (line: string): boolean => {
  const newLine = line.replace(/_/g, '');
  if (/^\d+$/.test(newLine)) return true;
  const e = newLine.split('#');
  console.log('e :', e);
  if (e.length !== 3 || e[0].length === 0 || e[1].length === 0) return false;
  const base = parseInt(e[0], 10);
  console.log('base :', base);
  if (base < 2 || base > 16) return false;
  return e[1].split('').every((char) => parseInt(char, base) >= 0);
};

console.log(Ada('123_456_789'));
console.log(Ada('16#123abc#'));
