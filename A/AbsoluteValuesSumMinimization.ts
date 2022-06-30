function AbsoluteValuesMinimalSum(a: number[]): number {
  return a[Math.ceil(a.length / 2) - 1];
}

console.log(AbsoluteValuesMinimalSum([2, 4, 7]));

function AbsoluteValuesMinimalSumV2(a: number[]): number {
  const distances = a.map((e) =>
    a.reduce((acc, curr) => acc + Math.abs(curr - e), 0)
  );
  console.log(distances);
  return a[distances.indexOf(Math.min(...distances))];
}

console.log(AbsoluteValuesMinimalSumV2([2, 4, 7]));
