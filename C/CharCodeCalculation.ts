/**
 * Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

```
'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
```

Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

```
total1 = 656667
              ^
total2 = 656661
              ^
```
Then return the difference between the sum of the digits in total1 and total2:
```
  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
```
 */

export const calc = (str: string): number => {
  const codes = [...str].map((char) => char.charCodeAt(0));

  const total1Str = codes.join('');
  const total2Str = codes.join('').replace(/7+/g, '1');

  const total1 = [...total1Str].reduce((acc, curr) => acc + parseInt(curr), 0);
  const total2 = [...total2Str].reduce((acc, curr) => acc + parseInt(curr), 0);

  return total1 - total2;
};

console.log(calc('ABC'));
