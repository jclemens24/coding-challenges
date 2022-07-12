/**
 * Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

If there is no solution, return -1.
 */

const ConstructSquare = function (s: string): number {
  const freq = (str: string) => {
    const obj: { [key: string]: number } = str
      .split('')
      .reduce((acc: { [key: string]: number }, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
    return Object.values(obj).sort().join('');
  };

  const strFreq = freq(s); // Get occurences of each digit {a: 1, b: 1}
  const max = 10 ** s.length - 1; // For 2 str.length = 2, max can only be 2 digits = 99 highest num
  const lower = Math.sqrt(max / 10);
  const upper = Math.floor(Math.sqrt(max));

  for (let i = upper; i > lower; i--) {
    const curr = i * i;
    console.log(freq(curr.toString()));
    if (strFreq === freq(curr.toString())) return curr;
  }
  return -1;
};

console.log(ConstructSquare('ab'));

const ConstructSquareV2 = function (s: string): number {
  const fn = (val: string) =>
    Object.values(
      [...val].reduce(
        (prev: { [key: string]: number }, curr) => (
          // eslint-disable-next-line no-sequences
          (prev[curr] = -~prev[val]), prev
        ),
        {}
      )
    )
      .sort()
      .join('');

  for (let i = ((10 ** s.length) ** 0.5) ^ 0; i > 2; i--) {
    if (`${i ** 2}`.length === s.length && fn(`${i ** 2}`) === fn(s))
      return i ** 2;
  }
  return -1;
};

console.log(ConstructSquareV2('ab'));
