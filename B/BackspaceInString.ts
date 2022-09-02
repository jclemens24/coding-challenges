/* eslint-disable no-extend-native */
/**
 *
 */

export function cleanString(s: string): string {
  const result: string[] = [];

  for (const char of s) {
    if (char.charAt(0) === '#') {
      result.pop();
    } else {
      result.push(char);
    }
  }
  return result.join('');
}

console.log(cleanString('a#bc#d'));
console.log(cleanString('abc#d##c'));

// My initial solution used a RegExp but once I got stuck, I moved to using a List
// Here is my implementation using RegExp after I solved the first one. This is my own
// Recursively evaluates the regexp until true

export function cleanStringV2(s: string): string {
  const regexp = /(^|[^#])#/;

  return regexp.test(s) ? cleanStringV2(s.replace(regexp, '')) : s;
}

console.log(cleanStringV2('a#bc#d'));
console.log(cleanStringV2('abc#d##c'));

export function cleanStringV3(s: string): string {
  console.log(Array.from(s));
  return Array.from(s).reduce(
    (acc, curr) =>
      curr === '#' ? acc.substring(0, acc.length - 1) : acc + curr,
    ''
  );
}

console.log(cleanStringV3('a#bc#d'));
console.log(cleanStringV3('abc#d##c'));

export function weatherInfo(temp: number): string {
  const c = convertToCelsius(temp);
  if (c < 0) return Math.round(c * 1e5) / 1e5 + ' is freezing temperature';
  else return Math.round(c * 1e5) / 1e5 + ' is above freezing temperature';
}

export function convertToCelsius(temperature: number): number {
  const celsius = ((temperature - 32) * (5 / 9) * 100) / 100;
  return celsius;
}

export function between(a: number, b: number): number[] {
  if (b < a) return [];
  return Array.from({ length: b - a + 1 }, (_) => 1 * a++);
}

console.log(between(1, 4));
console.log(between(-2, 2));

export function betweenV2(a: number, b: number): number[] {
  return [...new Array(b - a + 1).keys()].map((_) => _ + a);
}

console.log(betweenV2(1, 4));
console.log(betweenV2(-2, 2));

const swear = [112, 111, 111, 112];
console.log(String.fromCharCode(...swear));
const swear2 = [0x70, 0x6f, 0x6f, 0x70];
console.log(String.fromCharCode(...swear2));
