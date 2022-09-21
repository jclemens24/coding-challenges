export function pairsOfSum(numList: number[], sum: number): number[][] {
  const result: number[][] = [];
  numList.map((num, i, arr) => {
    for (let j = arr.length - 1; j > i; j--) {
      if (num + arr[j] === sum) {
        result.push([i, j]);
      }
    }
    return num;
  });
  return result;
}

console.log(pairsOfSum([1, 1, 0, 1], 2));

export function pairsOfSumV2(numList: number[], sum: number): void {
  const map = new Map<number, number>();
  for (let i = 0; i < numList.length; i++) {
    let j = i + 1;
    while (j < numList.length) {
      if (numList[i] + numList[j] === sum) {
        map.set(i, j);
      }
      j++;
    }
  }
  console.log(map.entries());
}
console.log(pairsOfSumV2([1, 1, 0, 1], 2));
