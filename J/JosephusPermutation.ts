/**
 * DESCRIPTION:
This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

For example, with n=7 and k=3 `josephus(7,3)` should act this way.

```
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
```
So our final result is:
```
josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
```
 */

export const josephus = <T>(items: T[], k: number): T[] => {
  const people = [...items];
  const order: T[] = [];

  let position: number = 0; // pos to be removed

  while (people.length >= 1) {
    position = (position + (k - 1)) % people.length;
    console.log('pos (before update): ', position);
    const killed = people.splice(position, 1);
    order.push(...killed);

    position %= people.length;
    console.log('pos: ', position);
  }
  return order;
};
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));

// Using Memoization

export function josephusV2<T>(items: T[], k: number): T[] {
  const { length } = items;
  const order: T[] = new Array(length);
  const memo: { [key: string]: number } = {};

  for (let i = 1; i <= length; i++) {
    order[i - 1] = items[helper(length, k, i, memo)];
  }
  return order;
}

const helper = (
  len: number,
  k: number,
  i: number,
  memo: { [key: string]: number }
): number => {
  if (Object.prototype.hasOwnProperty.call(memo, `${len}:${k}:${i}`)) {
    console.log('first if exec');
    return memo[`${len}:${k}:${i}`];
  }

  if (i === 1) {
    console.log('second if exec');
    return (memo[`${len}:${k}:${i}`] = (k - 1) % len);
  }
  console.log('default exec');
  return (memo[`${len}:${k}:${i}`] =
    (k + helper(len - 1, k, i - 1, memo)) % len);
};

console.log(josephusV2([1, 2, 3, 4, 5, 6, 7], 3));
