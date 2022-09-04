/**
 * 
 *  1. A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
    2. Within that sequence, he chooses two numbers, a and b.
    3. He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
    4. Given a number n, could you tell me the numbers he excluded from the sequence?

The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

`[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n`.

`[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a"`.

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

Examples:
```
removNb(26) should return [(15, 21), (21, 15)]
or
removNb(26) should return { {15, 21}, {21, 15} }
or
removeNb(26) should return [[15, 21], [21, 15]]
or
removNb(26) should return [ {15, 21}, {21, 15} ]
or
removNb(26) should return "15 21, 21 15"
```
in C:
`removNb(26)` should return  `{{15, 21}{21, 15}}` tested by way of strings.
Function removNb should return a pointer to an allocated array of Pair pointers, each one also allocated. 
Note
See examples of returns for each language in "RUN SAMPLE TESTS"
 * 
 * 
 * @param n The last number in the sequence of 1 to n where n > 0
 * @returns An array of tuples that contains the 2 numbers (a, b) whose product equals the sequence 1 to n minus a and b 
 */

export function removeNb(n: number): number[][] {
  const sequence = Array.from({ length: n }, (_, k) => k + 1);
  const results: number[][] = [];

  sequence.forEach((num, i) => {
    const factor = ((n * (n + 1)) / 2 - (i + 1)) / (i + 2);
    if (factor % 1 === 0 && factor <= n) results.push([num, factor]);
  });
  return results;
}

console.log(removeNb(26));
console.log(removeNb(101));
