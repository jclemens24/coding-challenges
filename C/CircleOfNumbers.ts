function CircleOfNumbers(n: number, firstNumber: number): number {
  const positioner = n / 2;
  const radial = firstNumber + positioner;
  return radial >= n ? firstNumber - positioner : radial;
}

console.log(CircleOfNumbers(10, 2));
console.log(CircleOfNumbers(18, 6));
console.log(CircleOfNumbers(10, 7));

function CircleOfNumbersV2(n: number, firstNumber: number): number {
  return (n / 2 + firstNumber) % n;
}

console.log(CircleOfNumbersV2(10, 7));
