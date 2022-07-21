/**
 * Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
 * @param a - array of ints. -1 represents a tree, others represent persons height
 * @returns sorted array of ints without moving elements whose values equal -1
 */

function sortByHeight(a: number[]): number[] {
  const sortedNoTrees = a.filter((height) => height > 0).sort((x, y) => x - y);
  return a.map((person) => {
    if (person !== -1) {
      return sortedNoTrees.shift();
    }
    return -1;
  }) as number[];
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
