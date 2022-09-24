/* eslint-disable no-unused-vars */
/**
 *
 */

export function remove(s: string): string {
  return s.replace(/!/g, '') + '!';
}

console.log(remove('Hi!'));
console.log(remove('Hi!!!'));
console.log(remove('!Hi'));

export function removeV2(s: string): string {
  return (
    s
      .split('')
      .filter((s) => s !== '!')
      .join('') + '!'
  );
}

console.log(removeV2('Hi!'));
console.log(removeV2('Hi!!!'));
console.log(removeV2('!Hi'));
