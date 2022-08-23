/**
 * The Evil King of Numbers wants to conquer all space in the Digital World. For that reason, His Evilness declared war on Letters, which actually stay in the Alphabet Fragmentation. You were nominated the Great Arbiter and must provide results of battles to the technology God 3 in 1, Llib Setag-Kram Grebrekcuz-Nole Ksum.

Description:

`armyLetters` consists of letters from `'a'` to `'z'` and armyNumbers consists of digits from '1' to '9'. The power of a letter is its position in the Latin alphabet, so the letter 'a' has power 1, 'b' has 2, .. 'z' has 26. The power of a digit is its value, so '1' has power 1, '2' has 2, .. '9' has 9.

`armyLetters` fights from its end; `armyNumbers` fights from its beginning.

Per round, one letter from `armyLetters` attacks one digit and does damage equal to its power, and one digit from `armyNumbers` attacks two letters and does damage equal to its power to both. Characters with `0` or lower power disappear.

Rounds of battle continue until at least one army has completely disappeared.

Output:

1. If either or both armies are empty at the start of hostilities, return "Peace".

2. At the end of the war, return "Draw" if both armies died, or the final state of the winning army (as a String).

How the attacks happen

For example, we have `"abc"` and `"12"`.

The rightmost letter of `"abc"` is `'c'`, which has power `3`, and the leftmost digit of `"12"` is `'1'`.

`'c'` attacks `'1'` and at the same time `'1'` attacks two last letters of "abc".

String "abc" becomes "aab" because '1' attacks the last two letters: 'c' (power 3) subtracts 1 and 'b' subtracts 1; '1' was attacked and eliminated by 'c' because its power became less than or equal to zero.

After this round we have "aab" and "2"; repeat until only one non-empty string is left and return it.

In this case the winner is "a".

Notes
There are no zeros in numbers.

There are no uppercase letters.

More examples
```
 let armyLetters = 'g', armyNumbers = '2222';
 armyLetters = 'e', armyNumbers = '222';
 armyLetters = 'c', armyNumbers = '22';
 armyLetters = 'a', armyNumbers = '2';
 armyLetters = '',  armyNumbers = '1';  
 return '1'; // armyNumbers
 let armyLetters = 'g', armyNumbers = '99';
 armyLetters = '', armyNumbers = '29';
 return '29'; // armyNumbers
 let armyLetters = 'g', armyNumbers = '23';
 armyLetters = 'e', armyNumbers = '3';
 armyLetters = 'b', armyNumbers = '';
 return 'b'; //armyLetters
 let armyLetters = 'ebj', armyNumbers = '45';
 armyLetters = 'ef', armyNumbers = '5';
 armyLetters = 'a', armyNumbers = '';
 return 'a'; // armyLetters
 ```
Have fun and please don't forget to vote and rank this kata!
 */

// return the winner's army as string, 'Draw' or 'Peace'

export function battleCodes(armyLetters: string, armyNumbers: string): string {
  if (!armyLetters || !armyNumbers) {
    return 'Peace';
  }

  let letterArmy = [...armyLetters].map((ltr) => ltr.charCodeAt(0) - 96);
  let numberArmy = [...armyNumbers].map((numStr) => numStr.charCodeAt(0) - 48);
  while (letterArmy.length && numberArmy.length) {
    const letterPow = letterArmy[letterArmy.length - 1];
    const numberPow = numberArmy[0];
    letterArmy[letterArmy.length - 1] -= numberPow;
    if (letterArmy.length > 1) {
      letterArmy[letterArmy.length - 2] -= numberPow;
    }
    numberArmy[0] -= letterPow;
    letterArmy = letterArmy.filter((val) => val > 0);
    numberArmy = numberArmy.filter((val) => val > 0);
  }
  if (letterArmy.length) {
    return letterArmy.map((ltr) => String.fromCharCode(ltr + 96)).join('');
  }
  if (numberArmy.length) {
    return numberArmy.map((num) => String.fromCharCode(num + 48)).join('');
  }
  return 'Draw';
}

// Test empty inputs
console.log(battleCodes('', ''));
console.log(battleCodes('g', '2222'));
