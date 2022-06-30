function findMissingInt(numberArr: number[]): number[] {
  const missing: number[] = [];
  numberArr.sort((a, b) => a - b);
  for (let i = 1; i < numberArr.length * 2 - 1; i++) {
    if (numberArr.indexOf(i) === -1) {
      missing.push(i);
    }
  }
  return missing;
}

console.log(findMissingInt([1, 4, 5, 7, 9, 10, 11, 12, 15, 24, 18]));
