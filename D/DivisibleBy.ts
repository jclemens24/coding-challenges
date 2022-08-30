export function divisibleBy(numbers: number[], divisor: number): number[] {
  return numbers.filter((num) => !(num % divisor));
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
