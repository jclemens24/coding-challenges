export function newAvg(arr: number[], newavg: number): number {
  const currTotal = arr.reduce((acc, curr) => acc + curr, 0);
  const newTotal = Math.ceil(newavg * arr.length - (currTotal - newavg));
  if (newTotal < 0) throw new Error('Expected New Average is too low');
  return newTotal;
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90));
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92));
// console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 2)); Throws

export function newAvgV2(arr: Array<number>, newavg: number): number {
  const newDonationAvg = Math.ceil(
    (arr.length + 1) * newavg - arr.reduce((acc, curr) => acc + curr, 0)
  );

  if (newDonationAvg <= 0) {
    throw new Error('Expected New Average is too low');
  }
  return newDonationAvg;
}

console.log(newAvgV2([14, 30, 5, 7, 9, 11, 16], 90));
console.log(newAvgV2([14, 30, 5, 7, 9, 11, 15], 92));
// console.log(newAvgV2([14, 30, 5, 7, 9, 11, 15], 2)); Throws
