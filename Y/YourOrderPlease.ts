/**
 * DESCRIPTION:
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```
 */

export function order(words: string): string {
  return words
    .split(' ')
    .sort((a, b) => {
      return (
        (a.match(/\d/) as unknown as number) -
        (b.match(/\d/) as unknown as number)
      );
    })
    .join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));

export function order2(words: string): string {
  return Array.from(
    words
      .split(' ')
      .reduce(
        (acc, str) => acc.set(str.split('').filter(Number), str),
        new Map()
      )
      .entries()
  )
    .sort((a, b) => a[0] - b[0])
    .map((e) => e[1])
    .join(' ');
}

console.log(order2('is2 Thi1s T4est 3a'));
