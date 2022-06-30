/* CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString. */

const SumUpNumbers = function (inputString: string): number {
  const inputArr = inputString.match(/([0-9]+)/g);
  if (inputArr) {
    return inputArr.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }
  return 0;
};

console.log(SumUpNumbers('2 apples, 12 oranges'));
console.log(SumUpNumbers('123450'));
console.log(SumUpNumbers('Your payment method is invalid'));
