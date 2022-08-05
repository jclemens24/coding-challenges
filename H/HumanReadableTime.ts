/**
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

export function humanReadable(seconds: number): string {
  // TODO
  const hours = Math.trunc(seconds / (60 * 60));
  const minutes = Math.trunc((seconds - hours * 60 * 60) / 60);
  const secs = seconds - hours * 60 * 60 - minutes * 60;
  return (
    `${hours}`.padStart(2, '0') +
    ':' +
    `${minutes}`.padStart(2, '0') +
    ':' +
    `${secs}`.padStart(2, '0')
  );
}

console.log(humanReadable(359999));
console.log(humanReadable(86399));
console.log(humanReadable(60));

export const reverse = (a: any[]) => {
  const reversed: any[] = [];
  a.forEach((element) => {
    reversed.unshift(element);
  });
  return reversed;
};

console.log(reverse([1, 2, 3]));

export const reverse2 = (a: any[]) => a.map(a.pop, [...a]);

console.log(reverse2([1, 2, 3]));
