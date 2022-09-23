export const convertFrac = (lst: [number, number][]): string => {
  function lcmTwoNumbers(x: number, y: number) {
    console.log(x, y);
    return Math.abs(x * y) / gcdTwoNumbers(x, y);
  }

  function gcdTwoNumbers(x: number, y: number): number {
    return y ? gcdTwoNumbers(y, x % y) : Math.abs(x);
  }

  const denom = lst.map(([_, y]) => y).reduce(lcmTwoNumbers, 1);
  console.log('denom: ', denom);

  const accumulator = lst.map(([x, y]) => x * (denom / y));

  const least = accumulator.reduce(gcdTwoNumbers, denom);

  return accumulator.map((val) => `(${val / least},${denom / least})`).join('');
};

console.log(
  convertFrac([
    [1, 2],
    [1, 3],
    [1, 4]
  ])
);

console.log(
  convertFrac([
    [69, 130],
    [87, 1310],
    [3, 4]
  ])
);

console.log(
  convertFrac([
    [1, 2],
    [4, 5],
    [3, 4],
    [6, 9],
    [7, 10]
  ])
);
