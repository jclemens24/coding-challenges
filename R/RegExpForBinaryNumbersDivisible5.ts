/**
 * Define a regular expression which tests if a given string representing a binary number is divisible by 5.

Examples:
```
// 5 divisable by 5
Regex.IsMatch('101', DivisibleByFive) == true

// 135 divisable by 5
Regex.IsMatch('10000111', DivisibleByFive) == true

// 666 not divisable by 5
Regex.IsMatch('0000001010011010', DivisibleByFive) == false
```
 */

export const divisibleByFive = /^(0|1(10)*(11|0)(01*0(01)*(00|1))*1)+$/;
