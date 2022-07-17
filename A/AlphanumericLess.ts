/**
 * An alphanumeric ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case in lexicographic ordering). For example, the tokens of the string "ab01c004" are `[a, b, 01, c, 004]`. In order to compare two strings, we'll first break them down into tokens and then compare the corresponding pairs of tokens with each other (i.e. compare the first token of the first string with the first token of the second string, etc).

Here is how tokens are compared:

1. If a letter is compared with another letter, the usual alphabetical order applies.

2. A number is always considered less than a letter.

3. When two numbers are compared, their values are compared. 
Leading zeros, if any, are ignored.

If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered smaller.

If the two strings `s1` and `s2` appear to be equal, consider the smallest index i such that `tokens(s1)[i]` and `tokens(s2)[i]` (where `tokens(s)[i]` is the `ith` token of string `s`) differ only by the number of leading zeros. If no such `i` exists, the strings are indeed equal. Otherwise, the string whose `ith` token has more leading zeros is considered smaller.
 */

function AlphanumericLess(s1: string, s2: string): boolean {
  const one = s1.replace(/\d+/g, (s) => s.padStart(20, '0'));
  const two = s2.replace(/\d+/g, (s) => s.padStart(20, '0'));
  if (one < two) return true;
  if (one > two) return false;
  return s1.padEnd(20, 'Z') < s2.padEnd(20, 'Z');
}

console.log(AlphanumericLess('a', 'a1'));
console.log(AlphanumericLess('ab', 'a1'));

function AlphanumericLessV2(s1: string, s2: string): boolean {
  const isLetter = (char: string) => {
    return char >= 'a' && char <= 'z';
  };
  const getNum = (index: number, str: string): string[] => {
    let leading = true;
    let zeroes = 0;
    const result: string[] = new Array(3);
    let numStr = '';

    while (index < str.length) {
      const c = str.charAt(index);
      if (isLetter(c)) {
        break;
      }
      if (c === '0' && leading) {
        zeroes++;
      } else {
        leading = false;
        numStr = numStr + c;
      }
      index++;
    }
    result[0] = zeroes.toString();
    result[1] = numStr;
    result[2] = index.toString();
    return result;
  };

  let index1 = 0;
  let index2 = 0;

  let zeroCount1 = 0;
  let zeroCount2 = 0;

  while (index1 < s1.length && index2 < s2.length) {
    const c1 = s1.charAt(index1);
    const c2 = s2.charAt(index2);

    if (isLetter(c1) && isLetter(c2)) {
      if (c1 !== c2) {
        return c1 < c2;
      }
      index1++;
      index2++;
    } else if (!isLetter(c1) && isLetter(c2)) {
      return true;
    } else if (isLetter(c1) && !isLetter(c2)) {
      return false;
    } else {
      const n1 = getNum(index1, s1);
      const n2 = getNum(index2, s2);

      if (n1[1].length !== n2[1].length) {
        return n1[1].length < n2[1].length;
      }
      const comp = n1[1].localeCompare(n2[1]);
      if (comp !== 0) {
        return comp < 0;
      }

      const z1 = parseInt(n1[0]);
      const z2 = parseInt(n2[0]);

      if (zeroCount1 === 0 && zeroCount2 === 0 && z1 !== z2) {
        zeroCount1 = z1;
        zeroCount2 = z2;
      }
      index1 = parseInt(n1[2]);
      index2 = parseInt(n2[2]);
    }
  }

  if (index1 < s1.length) {
    return false;
  } else if (index2 < s2.length) {
    return true;
  }
  return zeroCount1 > zeroCount2;
}

console.log(AlphanumericLessV2('a', 'a1'));
console.log(AlphanumericLessV2('ab', 'a1'));
