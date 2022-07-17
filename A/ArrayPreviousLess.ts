/**
 * Given array of integers, for each position `i`, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position `i` in the answer. If no such value can be found, store `-1` instead.

Example

For `items = [3, 5, 2, 4, 5]`, the output should be
`solution(items) = [-1, 3, -1, 2, 4]`

This is the only way I could think of to solve this problem. If you find another way, please send me an email. I'd love to see other solutions as I know they exist.
 */

const ArrayPrevLess = (items: number[]): number[] => {
  return items.map(
    (num, i) =>
      items
        .slice(0, i)
        .reverse()
        .find((val) => val < num) || -1
  );
};

console.log(ArrayPrevLess([3, 5, 2, 4, 5]));
