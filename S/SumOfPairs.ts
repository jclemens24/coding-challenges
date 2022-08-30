/**
 * Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
```
sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
```
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
 */

export function sumPairs(
  ints: number[],
  s: number
): [number, number] | undefined {
  const map: { [key: string]: number } = {};
  let pair: [number, number] | undefined;
  let maxIndex = ints.length - 1;
  for (let i = 0; i < ints.length; i++) {
    const a = ints[i];
    const b = s - a;
    const j = map[b];
    if (j !== undefined && i <= maxIndex && j <= maxIndex) {
      maxIndex = i > j ? i : j;
      pair = i < j ? [a, b] : [b, a];
    }
    const temp = map[a];
    if (temp === undefined || i < temp) {
      map[a] = i;
    }
  }
  return pair;
}

console.log(sumPairs([4, 3, 2, 3, 4], 6));

export function sumPairsV2(ints: number[], s: number): [number, number] | void {
  const evaluated = new Set<number>();
  for (const num of ints) {
    if (evaluated.has(s - num)) return [s - num, num];
    evaluated.add(num);
  }
}

console.log(sumPairsV2([4, 3, 2, 3, 4], 6));

export function sumPairsV3(ints: number[], s: number): [number, number] | void {
  const hashMap = new Map<number, number>();
  for (let i = 0; i < ints.length; i++) {
    if (!hashMap.has(ints[i])) {
      hashMap.set(s - ints[i], ints[i]);
    } else {
      return [hashMap.get(ints[i])!, ints[i]];
    }
  }
}
