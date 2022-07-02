/**
 *A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.

Given two integers, your task is to find the result that the child will get.

Note: The child had learned from this site, so feel free to check it out too if you are not familiar with column addition.

Example

For param1 = 456 and param2 = 1734, the output should be
solution(param1, param2) = 1180.
 */

const Carrying = function (param1: number, param2: number): number {
  let result = 0;
  let decimalPlace = 1;

  while (param1 + param2 > 0) {
    decimalPlace *= 10;
    console.log(`Decimal Place: %d`, decimalPlace);
    result += (param1 + param2) % decimalPlace;
    console.log(`Result: %d`, result);
    param1 -= param1 % decimalPlace;
    console.log(`Param1: %d`, param1);
    param2 -= param2 % decimalPlace;
    console.log(`Param2: %d`, param2);
  }
  return result;
};

console.log(Carrying(456, 1734));
