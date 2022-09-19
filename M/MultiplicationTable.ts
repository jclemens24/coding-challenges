/**
 * Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
 */

export function multiplicationTable(size: number): number[][] {
  return Array.from({ length: size }, (_, k) =>
    Array.from({ length: size }, (_, key) => (key + 1) * (k + 1))
  );
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(3));

export function multiplicationTableV2(size: number): number[][] {
  return [...Array(size)].map((_, k) =>
    [...Array(size)].map((_, j) => (k + 1) * (j + 1))
  );
}

console.log(multiplicationTableV2(1));
console.log(multiplicationTableV2(3));

interface IFruitList {
  [key: number]: string;
}

const fruits: IFruitList = {
  1: 'kiwi',
  2: 'pear',
  3: 'kiwi',
  4: 'banana',
  5: 'melon',
  6: 'banana',
  7: 'melon',
  8: 'pineapple',
  9: 'apple'
};

export function subtractTheSum(n: number): string {
  const sum = n
    .toString(10)
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr), 0);
  const total: number = n - sum;

  return total in fruits ? fruits[total] : subtractTheSum(total);
}
