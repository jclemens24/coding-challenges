function sortByHeight(a: number[]): number[] {
  const sortedNoTrees = a.filter((height) => height > 0).sort((x, y) => x - y);
  console.log(sortedNoTrees);
  return a.map((person) => {
    if (person !== -1) {
      return sortedNoTrees.shift();
    }
    return -1;
  }) as number[];
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
