/* eslint-disable no-unused-vars */
/**
 * DESCRIPTION:
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return `true` if the string is valid, and `false` if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets `[]`, and curly braces `{}`. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: `()[]{}`.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
```
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
```
 */

function ValidBraces(braces: string): boolean {
  const isOpenBrace = (symbol: string) =>
    symbol === '(' || symbol === '{' || symbol === '[';

  const getClosingBrace = (symbol: string): string => {
    switch (symbol) {
      case '{':
        return '}';
      case '[':
        return ']';
      case '(':
        return ')';
      default:
        return '';
    }
  };
  const bracesList: string[] = [];

  for (const symbol of braces) {
    if (isOpenBrace(symbol)) {
      bracesList.push(getClosingBrace(symbol));
      console.log(bracesList);
    } else {
      if (symbol !== bracesList.pop()) {
        console.log(bracesList);
        return false;
      }
    }
  }
  return bracesList.length === 0;
}

console.log(ValidBraces('(){}[]'));
console.log(ValidBraces('([{}])'));
console.log(ValidBraces('(}'));

export function ValidBracesV2(braces: string): boolean {
  const list: string[] = [];
  const start = ['(', '[', '{'];
  const end = [')', ']', '}'];

  for (let index = 0; index < braces.length; index++) {
    const char = braces[index];
    // If char is in start arr
    if (start.indexOf(char) > -1) {
      list.push(char);
      continue;
    }
    if (list.pop() === start[end.indexOf(char)]) {
      continue;
    }
    return false;
  }
  return list.length === 0;
}

export function ValidBracesV4(braces: string): boolean {
  const buffer: Array<string> = [];
  const bracesMap = new Map<string, string>([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ]);

  for (let index = 0; index < braces.length; index++) {
    if (bracesMap.has(braces[index])) {
      buffer.push(braces[index]);
    } else if (
      !buffer.length ||
      braces[index] !== bracesMap.get(buffer.pop() as string)
    ) {
      return false;
    }
  }
  return !buffer.length;
}
console.log(ValidBracesV4('(){}[]'));
console.log(ValidBracesV4('([{}])'));
console.log(ValidBracesV4('(}'));
// Not my implementation, just wanted to see what was happening:
const enum BracesFlags {
  close = 1 << 2
}

const enum BracesTypes {
  parentheses = 0b01,
  brackets = 0b10,
  curly = 0b11,
  __TYPE,
  parentheses_close = parentheses | BracesFlags.close,
  brackets_close = brackets | BracesFlags.close,
  curly_close = curly | BracesFlags.close
}

const BracesTypeBitsCount = (BracesTypes.__TYPE - 1).toString(2).length;
const BracesTypeMask = (1 << BracesTypeBitsCount) - 1;

type OpenBracesChar = '(' | '[' | '{';
type ClosedBracesChar = ')' | ']' | '}';
type BracesChars = OpenBracesChar | ClosedBracesChar;

const BracesByType: Record<BracesChars, BracesTypes> = {
  '(': BracesTypes.parentheses,
  ')': BracesTypes.parentheses_close,
  '[': BracesTypes.brackets,
  ']': BracesTypes.brackets_close,
  '{': BracesTypes.curly,
  '}': BracesTypes.curly_close
};

export function ValidBracesV3(braces: string): boolean {
  let currentOpenBraceType: BracesTypes = 0;
  let currentOpenBraceCounter = 0;
  const stack = <Array<number>>[];
  const chars = [...braces] as BracesChars[];

  for (const char of chars) {
    const typeAndFlags = BracesByType[char];
    const type = typeAndFlags & BracesTypeMask;

    if (!typeAndFlags) {
      throw new Error(`Inlavid braces symbol "${char}"`);
    }

    if ((typeAndFlags & BracesFlags.close) !== 0) {
      if (currentOpenBraceType !== type) {
        return false;
      }

      if (--currentOpenBraceCounter === 0) {
        const prevStackValue = stack.pop();

        if (prevStackValue === undefined) {
          return false;
        }

        currentOpenBraceCounter = prevStackValue >> BracesTypeBitsCount;
        currentOpenBraceType = prevStackValue & BracesTypeMask;
      }
    } else {
      if (currentOpenBraceType === type) {
        currentOpenBraceCounter++;
      } else {
        stack.push(
          (currentOpenBraceCounter << BracesTypeBitsCount) |
            currentOpenBraceType
        );

        currentOpenBraceType = type;
        currentOpenBraceCounter = 1;
      }
    }
  }

  return stack.length === 0;
}

// console.log(ValidBracesV3('(){}[]'));
// console.log(ValidBracesV3('([{}])'));
// console.log(ValidBracesV3('(}'));
