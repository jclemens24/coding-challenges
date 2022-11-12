/**
 * In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.
 */

export function isLeap(year: number): boolean {
  return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0);
}

console.log(isLeap(1234));
console.log(isLeap(2010));
console.log(isLeap(2013));
console.log(isLeap(1984));
console.log(isLeap(2000));
console.log(isLeap(2900));
