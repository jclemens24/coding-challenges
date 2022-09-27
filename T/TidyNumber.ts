/**
 * DESCRIPTION:
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .
 */

export function tidyNumber(num: number): boolean {
  return num === +[...`${num}`].sort((a, b) => +a - +b).join('');
}

console.log(tidyNumber(12));
console.log(tidyNumber(102));
console.log(tidyNumber(9672));

export function tidyNumberV2(num: number): boolean {
  const digits = [...`${num}`];
  let isTidyFlag = true;

  for (let i = 1; i < digits.length; i++) {
    if (+digits[i - 1] > +digits[i]) {
      isTidyFlag = false;
      break;
    } else {
      continue;
    }
  }
  return isTidyFlag;
}

console.log(tidyNumberV2(12));
console.log(tidyNumberV2(102));
console.log(tidyNumberV2(9672));
