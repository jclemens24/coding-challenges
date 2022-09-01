/**
 * Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:
```
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
```
 */

export const dashatize = (num: number): string => {
  if (!Number.isInteger(num)) return 'NaN';
  return num
    .toString()
    .replace(/[13579]/g, (match) => `-${match}-`)
    .replace(/[--]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

console.log(dashatize(274));
console.log(dashatize(6815));
console.log(dashatize(5311));
console.log(dashatize(974302));
console.log(dashatize(-1));

export function dashatizeV2(num: number): string {
  return isNaN(num)
    ? 'NaN'
    : [...`${num}`]
        .map((n) => (parseInt(n) % 2 ? `-${n}-` : n))
        .join('')
        .replace(/-{2,}/g, '-')
        .replace(/(^-|-$)/g, '');
}

console.log(dashatizeV2(274));
console.log(dashatizeV2(6815));
console.log(dashatizeV2(5311));
console.log(dashatizeV2(974302));
console.log(dashatizeV2(-1));
