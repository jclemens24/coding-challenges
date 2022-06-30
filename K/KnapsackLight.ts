const KnapSackLight = (
  value1: number,
  weight1: number,
  value2: number,
  weight2: number,
  maxW: number
): number => {
  return Math.max(
    maxW >= weight1 ? value1 : 0,
    maxW >= weight2 ? value2 : 0,
    maxW >= weight1 + weight2 ? value1 + value2 : 0
  );
};

console.log(KnapSackLight(10, 5, 6, 4, 8));
console.log(KnapSackLight(10, 5, 6, 4, 9));
console.log(KnapSackLight(5, 3, 7, 4, 6));

const KnapSackLightV2 = (
  value1: number,
  weight1: number,
  value2: number,
  weight2: number,
  maxW: number
): number => {
  const result = [
    { v: value1, w: weight1 },
    { v: value2, w: weight2 }
  ]
    .sort((a, b) => b.v - a.v)
    .reduce(
      (acc, curr) => {
        const weight = acc.w + curr.w;
        if (weight <= maxW) {
          acc.v += curr.v;
          acc.w += weight;
        }
        return acc;
      },
      { v: 0, w: 0 }
    );
  return result.v;
};

console.log(KnapSackLightV2(10, 5, 6, 4, 8));
console.log(KnapSackLightV2(10, 5, 6, 4, 9));
console.log(KnapSackLightV2(5, 3, 7, 4, 6));
