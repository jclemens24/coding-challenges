function ArrayMaximalAdjacentDiff(inputArr: number[]): number {
  let max: number = 0;

  for (let i = 0; i < inputArr.length; i++) {
    const distance: number = Math.abs(inputArr[i] - inputArr[i + 1]);
    if (distance > max) {
      max = distance;
    }
  }
  return max;
}

ArrayMaximalAdjacentDiff([3, 6, 9, 8]);

function ArrayMaximalAdjacentDiffV2(inputArr: number[]): number {
  return Math.max(
    ...inputArr.slice(1).map((val, i) => Math.abs(val - inputArr[i]))
  );
}

ArrayMaximalAdjacentDiffV2([27, 9, 4, 10]);
