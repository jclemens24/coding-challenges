/**
 * Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

const digitize = (n: number): number[] => {
  return [...`${n}`].reverse().map(Number);
};

console.log(digitize(348597));

const FakeBinary = (x: string): void => {
  const t = x.replace(/\d/g, (x) => {
    if (parseInt(x) >= 5) {
      return '1';
    } else {
      return '0';
    }
  });
  console.log(t);
};

FakeBinary('45385593107843568');

function noSpaces(x: string): string {
  return x.replace(/\s+/g, '');
}

console.log(noSpaces('8 j 8   mBliB8g  imjB8B8  jl  B'));

function firstNonConsecutive(arr: number[]): null | number {
  const ret: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const next = arr[i + 1];
    if (next === curr + 1) continue;
    else {
      ret.push(arr[i + 1]);
      break;
    }
  }
  return ret.length ? ret[0] : null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

function StringEndsWith(str: string, ending: string): boolean {
  return str.endsWith(ending);
}

console.log(StringEndsWith('abc', 'bc'));

export function printerError(s: string): string {
  let printErrors = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) < 97 || s[i].charCodeAt(0) > 109) printErrors += 1;
  }
  return `${printErrors}/${s.length}`;
}

console.log(printerError('aaabbbbhaijjjm'));

export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number
): number => {
  let population = p0;
  let years = 0;
  while (population <= p) {
    population = population + population * (percent / 100) + aug;
    years++;
  }
  return years;
};

console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500000, 0.25, -1000, 2000000));

export function accum(s: string): string {
  const arr = s.split('').map((str) => str.toLowerCase());
  const changed = arr.map((val, i) => {
    if (i === 0) return val.toUpperCase();
    return `${val}`.toUpperCase() + val.padEnd(i, val);
  });
  return changed.join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));

export function findShort(s: string): number {
  const arr = s.split(' ').map((str) => str.length);
  return Math.min(...arr);
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  )
);

export const centuryFromYear = (year: number): number => {
  return Math.ceil(year / 100);
};

console.log(centuryFromYear(100));
console.log(centuryFromYear(101));
console.log(centuryFromYear(1705));

export function SeriesSum(n: number): string {
  let series = 0;
  for (let i = 0; i < n; i++) {
    series += 1 / (1 + i * 3);
  }
  return String(series.toFixed(2));
}
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(5));

export const makeNegative = (num: number): number => {
  if (num <= 0) return num;
  return ~num + 1;
};

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(42));

export const makeNegativeV2 = (num: number): number => {
  return -Math.abs(num);
};

console.log(makeNegativeV2(1));
console.log(makeNegativeV2(-5));
console.log(makeNegativeV2(0));
console.log(makeNegativeV2(42));

export function findSmallestInt(args: number[]): number {
  return Math.min(...args);
}

console.log(findSmallestInt([34, 15, 88, 2]));

export function getGrade(a: number, b: number, c: number): string {
  const score = Math.round((a + b + c) / 3);
  return score >= 90
    ? 'A'
    : score < 90 && score >= 80
    ? 'B'
    : score < 80 && score >= 70
    ? 'C'
    : score < 70 && score >= 60
    ? 'D'
    : 'F';
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(70, 70, 100));

export function removeChar(str: string): string {
  return str.substring(1, str.length - 1);
}

console.log(removeChar('eloquent'));

export class Kata {
  static getCount(str: string): number {
    const matches = str.match(/[aeiou]/gi);
    return matches?.length || 0;
  }
}

console.log(Kata.getCount('abracadabra'));
console.log(Kata.getCount('jdfgt'));

export function rps(p1: string, p2: string): string {
  if (p1 === p2) {
    return 'Draw!';
  } else if (
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'rock' && p2 === 'scissors')
  ) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
}

export class Kata1 {
  static squareDigits(num: number): number {
    const arr = [...`${num}`].map((str) => {
      const int = parseInt(str);
      return int ** 2;
    });
    return Number(arr.join(''));
  }
}

console.log(Kata1.squareDigits(9119));

export function sumOfDivided(lst: number[]): number[][] {
  let max = lst.reduce((prev, curr) => (prev > curr ? prev : curr), lst[0]);
  const min = lst.reduce((prev, curr) => (prev < curr ? prev : curr), lst[0]);
  max = Math.max(max, -min);
  const primes: number[] = [];
  for (let i = 2; i <= max; i++) {
    if (
      primes.every((num) => i % num) &&
      lst.some(function (val) {
        return !(val % i);
      })
    ) {
      primes.push(i);
    }
  }
  console.log(primes);
  const result = primes.map((val) => {
    return [val, lst.reduce((prev, curr) => prev + (curr % val ? 0 : curr), 0)];
  });
  return result;
}

console.log(sumOfDivided([12, 15]));

export const productFib = (prod: number): [number, number, boolean] => {
  let prev = 0;
  let curr = 1;
  let multiplied = prev * curr;

  while (multiplied < prod) {
    const temp = curr;
    curr += prev;
    prev = temp;
    multiplied = prev * curr;
  }
  return [prev, curr, multiplied === prod];
};

console.log(productFib(714));
