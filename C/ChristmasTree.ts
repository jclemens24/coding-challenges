/* eslint-disable no-array-constructor */
/**
 * It's Christmas time! To share his Christmas spirit with all his friends, the young Christmas Elf decided to send each of them a Christmas e-mail with a nice Christmas tree. Unfortunately, Internet traffic is very expensive in the North Pole, so instead of sending an actual image he got creative and drew the tree using nothing but asterisks ('*' symbols). He has given you the specs (see below) and your task is to write a program that will generate trees following the spec and some initial parameters.

Here is a formal definition of how the tree should be built, but before you read it the Elf HIGHLY recommends first looking at the examples that follow:

  1. Each tree has a crown as follows:
    ``` *
        *
       ***```

  2. Define a line as a horizontal group of asterisks and a level as a collection of levelHeight lines stacked one on top of the other.

  3. Below the crown there are levelNum levels.

  4. The tree is perfectly symmetrical so all the middle asterisks of the lines lie on the center of the tree.

  5. Each line of the same level (excluding the first one) has two more asterisks than the previous one (one added to each end);

  6. The number of asterisks in the first line of each level is chosen as follows:

    6a. the first line of the first level has 5 asterisks;
    6b. the first line of each consecutive level contains two more asterisks than the first line of the previous level.

  7. And finally there is the tree foot which has a height of levelNum and a width of:

    7a. levelHeight asterisks if levelHeight is odd;
    7b. levelHeight + 1 asterisks if levelHeight is even.

Given levelNum and levelHeight, return the Christmas tree of the young elf.
 */

const XMasTree = (levelNum: number, levelHeight: number): string[] => {
  const max = 5 + (levelHeight + levelNum - 2) * 2;
  const crown = [
    ' '.repeat((max - 1) / 2) + '*',
    ' '.repeat((max - 1) / 2) + '*',
    ' '.repeat((max - 3) / 2) + '***'
  ];
  // eslint-disable-next-line no-array-constructor
  const levels = new Array<string>();
  const foot = new Array<string>();

  for (let i = 0; i < levelNum; i++) {
    for (let j = 0; j < levelHeight; j++) {
      levels.push(
        ' '.repeat(levelHeight - 1 - j + (levelNum - i - 1)) +
          '*'.repeat(5 + 2 * (j + i))
      );
    }
    foot.push(
      ' '.repeat((max - 1) / 2 - Math.floor(levelHeight / 2)) +
        '*'.repeat(levelHeight + (levelHeight % 2 === 0 ? 1 : 0))
    );
  }
  const tree: string[] = crown.concat(levels, foot);
  return tree;
};

console.log(XMasTree(1, 3));
console.log(XMasTree(2, 4));
