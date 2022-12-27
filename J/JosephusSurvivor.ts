/**
 * DESCRIPTION:
In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

```
josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
```

The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.

 */

export function josephusSurvivor(n: number, k: number): number {
  let array = buildRange(n);
  let index = 0;
  let map: { a: Array<number>; o: number } = { a: [], o: 0 };
  while (array.length > 1) {
    map = findNext(array, k, index);
    array = map.a.length === 0 ? [array.pop() as number] : map.a;
    index = map.o;
  }
  return array[0];
}

const buildRange = (end: number): number[] => {
  return Array.from({ length: end }, (v: unknown, k: number) => k + 1);
};

const findNext = (
  arr: number[],
  k: number,
  o: number
): { a: Array<number>; o: number } => {
  const array = [];
  let index = 0;
  let found = false;

  for (let i = 0; i < arr.length; i++) {
    if ((i + o + 1) % k !== 0) {
      array.push(arr[i]);
      index += 1;
    } else {
      index = 0;
      found = true;
    }
  }
  return { a: array, o: found ? index : index + o };
};

console.log(josephusSurvivor(7, 3));
