/**
 * Given a string, enclose it in round brackets
 *
 * The last solution is probably best and most straightforward.
 */

const EncloseInBrackets = function (inputString: string): string {
  const outputStr = inputString.split('');

  outputStr.push(')');
  outputStr.unshift('(');
  return outputStr.join('');
};

console.log(EncloseInBrackets('abacaba'));

const EncloseInBracketsV2 = function (inputString: string): string {
  return inputString
    .padStart(inputString.length + 1, '(')
    .padEnd(inputString.length + 2, ')');
};

console.log(EncloseInBracketsV2('abacaba'));

const EncloseInBracketsV3 = function (inputString: string): string {
  const bracket1 = '(';
  const bracket2 = ')';

  return bracket1.concat(inputString, bracket2);
};

console.log(EncloseInBracketsV3('abacaba'));

const EncloseInBracketsV4 = function (inputString: string): string {
  return `(${inputString})`;
};

console.log(EncloseInBracketsV4('abacaba'));
