/**
 * Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

```
[
  "  *  ",
  " *** ", 
  "*****"
]
```
 */

export const towerBuilder = (nFloors: number): string[] => {
  const maxLength = nFloors + (nFloors - 1);
  const towerArr: string[] = [];
  for (let i = 1; i <= maxLength; i += 2) {
    towerArr.push('*'.repeat(i));
  }
  return towerArr.map((str) => {
    const spaces = (maxLength - str.length) / 2;
    return ' '.repeat(spaces) + str + ' '.repeat(spaces);
  });
};

console.log(towerBuilder(3));
console.log(towerBuilder(6));

export const towerBuilderV2 = (nFloors: number): string[] => {
  return Array.from({ length: nFloors }, (_, index) => {
    const spaces = ' '.repeat(nFloors - 1 - index);
    return `${spaces}${'*'.repeat(index * 2 + 1)}${spaces}`;
  });
};

console.log(towerBuilderV2(3));
console.log(towerBuilderV2(6));
