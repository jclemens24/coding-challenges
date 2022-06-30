function DepositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let year: number = 0;
  while (deposit < threshold) {
    deposit += deposit * (rate / 100);
    year++;
  }
  return year;
}

console.log(DepositProfit(100, 20, 170));

function DepositProfitV2(
  deposit: number,
  rate: number,
  threshold: number
): number {
  return Math.ceil(Math.log(threshold / deposit) / Math.log(rate / 100 + 1));
}

console.log(DepositProfitV2(100, 20, 170));
