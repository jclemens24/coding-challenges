/**
 * DESCRIPTION:
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
 */

export function replaceDots(str: string): string {
  return str.replace(/\./g, '-');
}

console.log(replaceDots(''));
console.log(replaceDots('one.two.three'));
