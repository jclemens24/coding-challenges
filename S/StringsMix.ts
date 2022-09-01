/**
 *
 * @param s1 - first string
 * @param s2 - second string
 * @returns
 */

export const mix = (s1: string, s2: string): string => {
  const s1obj: { [key: string]: number } = {};
  const s2obj: { [key: string]: number } = {};

  const s1Arr = s1.split('');
  const s2Arr = s2.split('');

  for (let i = 0; i < Math.max(s1Arr.length, s2Arr.length); i++) {
    if (s1Arr[i] && s1Arr[i].match(/[a-z]/))
      s1obj[s1Arr[i]] = s1obj[s1Arr[i]] + 1 || 1;
    if (s2Arr[i] && s2Arr[i].match(/[a-z]/))
      s2obj[s2Arr[i]] = s2obj[s2Arr[i]] + 1 || 1;
  }

  const keys = Array.from(
    new Set([...Object.keys(s1obj), ...Object.keys(s2obj)])
  );

  const result: string[][] = [];

  console.log(keys);
  keys.forEach((key) => {
    const countS1 = s1obj[key] ? s1obj[key] : 0;
    const counts2 = s2obj[key] ? s2obj[key] : 0;
    const max = Math.max(countS1, counts2);
    const order = countS1 > counts2 ? '1' : countS1 < counts2 ? '2' : '=';

    if (max > 1) result.push([order, key.repeat(max)]);
  });
  console.log(result);
  result.sort((a, b) => {
    if (a[1].length > b[1].length) return -1;
    if (a[1].length < b[1].length) return 1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });

  return result.map((subarray) => subarray.join(':')).join('/');
};

console.log(mix('A aaaa bb c', '& aaa bbb c d'));

type LetterInfo = {
  letter: string;
  count: number;
  order: '1' | '2' | '=';
};

export const mixV2 = (s1: string, s2: string): string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const sCounts: LetterInfo[] = alphabet.map((char) => {
    const sOne = s1.split('').filter((c) => c === char).length;
    const sTwo = s2.split('').filter((c) => c === char).length;
    const max = Math.max(sOne, sTwo);

    return {
      letter: char,
      count: max,
      order: max > sOne ? '2' : max > sTwo ? '1' : '='
    };
  });

  const countsFiltered = sCounts.filter((obj) => obj.count > 1);
  return countsFiltered
    .sort(
      (a, b) =>
        b.count - a.count || (a.order + a.letter > b.order + b.letter ? 1 : -1)
    )
    .map((obj) => `${obj.order}:${obj.letter.repeat(obj.count)}`)
    .join('/');
};

console.log(mixV2('A aaaa bb c', '& aaa bbb c d'));
