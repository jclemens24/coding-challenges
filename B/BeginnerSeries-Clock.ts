/**
 * DESCRIPTION:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
```
h = 0
m = 1
s = 1

result = 61000
```
 */
export function past(h: number, m: number, s: number): number {
  const hours = h * 3600000;
  const mins = m * 60000;
  const seconds = s * 1000;
  return hours + mins + seconds;
}

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));

export function pastV2(h: number, m: number, s: number): number {
  const seconds = (s: number) => s * 1000;
  const minutes = (m: number) => m * seconds(60);
  const hours = (h: number) => h * minutes(60);

  return hours(h) + minutes(m) + seconds(s);
}

console.log(pastV2(0, 1, 1));
console.log(pastV2(1, 1, 1));

export function pastV3(h: number, m: number, s: number): number {
  h = h * 60 * 60 * 1000;
  m = m * 60 * 1000;
  s = s * 1000;
  return h + m + s;
}

console.log(pastV3(0, 1, 1));
console.log(pastV3(1, 1, 1));
