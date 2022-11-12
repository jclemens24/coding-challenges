/**
 *
 */

type NO = 0;
type ALMOST = 1;
type YES = 2;

export const isInteresting = (
  n: number,
  awesomePhrases: number[]
): NO | ALMOST | YES => {
  const isAllDigitsSame = (num: number) =>
    `${num}`.replace(new RegExp(`${num}`[0], 'g'), '').length === 0;

  const isSequentialDecrease = (num: number) => '9876543210'.includes(`${num}`);

  const isSequentialIncrease = (num: number) =>
    '01234567890'.includes(`${num}`);

  const isPalindrome = (num: number) =>
    `${num}` === `${num}`.split('').reverse().join('');

  const isOneDigitFollowedByZeroes = (num: number) =>
    [...`${num}`].slice(1).every((num) => num === '0');

  const isInAwesomeArray = (num: number, awesome: number[]) =>
    awesome.includes(num);

  const checkIfInteresting = (num: number, awesome: number[]) => {
    return (
      `${num}`.length > 2 &&
      (isAllDigitsSame(num) ||
        isSequentialDecrease(num) ||
        isSequentialIncrease(num) ||
        isPalindrome(num) ||
        isOneDigitFollowedByZeroes(num) ||
        isInAwesomeArray(num, awesome))
    );
  };

  if (checkIfInteresting(n, awesomePhrases)) {
    return 2;
  }
  if (
    checkIfInteresting(n + 1, awesomePhrases) ||
    checkIfInteresting(n + 2, awesomePhrases)
  ) {
    return 1;
  }
  return 0;
};

console.log(isInteresting(3, [1337, 256]));
console.log(isInteresting(1336, [1337, 256]));
console.log(isInteresting(1337, [1337, 256]));
console.log(isInteresting(11208, [1337, 256]));
console.log(isInteresting(11209, [1337, 256]));
