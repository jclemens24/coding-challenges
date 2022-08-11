/**
 * Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
 * 
 * ```
 * 12 ==> 21
513 ==> 531
2017 ==> 2071

nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
```

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

```
9 ==> -1
111 ==> -1
531 ==> -1
```
 */

export function nextBigger(n: number): number {
  const digits = numToArr(n);

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] > digits[i - 1]) {
      return arrToNum(
        digits
          .splice(0, i - 1)
          .concat(
            digits.splice(
              digits.indexOf(
                Math.min(...digits.filter((num) => num > digits[0]))
              ),
              1
            )
          )
          .concat(digits.sort())
      );
    }
  }
  return -1;
}

function numToArr(n: number): Array<number> {
  return Array.from(String(n), Number);
}

function arrToNum(arr: Array<number>): number {
  return Number(arr.join(''));
}

console.log(nextBigger(9));
console.log(nextBigger(513));
