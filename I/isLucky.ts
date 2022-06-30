function solution(n: number): boolean {
  const nums = [...`${n}`];
  console.log(nums);
  let sum = 0;
  for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {
    sum += parseInt(nums[i], 10);
    sum -= parseInt(nums[j], 10);
  }
  return sum === 0;
}

console.log(solution(1230));

function isLuckySolutionV2(n: number): boolean {
  const nums = [...`${n}`].map((num) => parseInt(num, 10));
  const leftSide = nums.splice(0, nums.length / 2);
  console.log(leftSide, nums);
  const numsTotal = nums.reduce((prev, curr) => prev + curr, 0);
  const leftSideTotal = leftSide.reduce((prev, curr) => prev + curr, 0);
  return numsTotal - leftSideTotal === 0;
}

console.log(isLuckySolutionV2(1230));
console.log(isLuckySolutionV2(261534));
