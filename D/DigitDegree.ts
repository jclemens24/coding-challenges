function DigitDegree(n: number): number {
  let count: number = 0;
  let numStr = n.toString();
  while (numStr.length > 1) {
    numStr = numStr
      .split('')
      .reduce((prev, curr) => (Number(prev) + Number(curr)).toString());
    count++;
  }
  return count;
}

console.log(DigitDegree(91));
console.log(DigitDegree(100));
