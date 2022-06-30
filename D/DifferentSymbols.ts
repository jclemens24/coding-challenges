const DifferentSymbols = (s: string): number => {
  return new Set(s).size;
};

console.log(DifferentSymbols('cabca'));

const DifferentSymbolsV2 = (s: string): number => {
  return Object.keys(
    s.split('').reduce(
      // eslint-disable-next-line no-sequences
      (acc: { [key: string]: boolean }, curr) => ((acc[curr] = true), acc),
      {}
    )
  ).length;
};

console.log(DifferentSymbolsV2('cabca'));
