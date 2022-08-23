/**
 * DESCRIPTION:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
```
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```
Notes

1. All numbers are valid Int32, no need to validate them.
2. There will always be at least one number in the input string.
3. Output string must be two numbers separated by a single space, and highest number is first.
 */

export class Kata {
  static highAndLow(numbers: string): string {
    const numsArr = numbers.split(' ').map(Number);
    const max = Math.max(...numsArr);
    const min = Math.min(...numsArr);
    return `${max} ${min}`;
  }
}

console.log(Kata.highAndLow('1 2 3 4 5'));
console.log(Kata.highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));
