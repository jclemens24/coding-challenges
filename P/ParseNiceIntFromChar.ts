/* eslint-disable camelcase */
/** 
 * You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/

export function get_age(age: string): number {
  const num = parseInt(age, 10);
  return num;
}

console.log(get_age('5 years old'));

export function get_ageV2(age: string): number {
  return parseInt(age.match(/\d/g)?.shift()!, 10);
}

console.log(get_ageV2('5 years old'));

export function get_ageV3(age: string): number {
  return +age.charAt(0);
}

console.log(get_ageV3('5 years old'));
