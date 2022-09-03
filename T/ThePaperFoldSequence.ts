export function* paperFold(): Generator<number, any, undefined> {
  yield* [1, 1, 0, 1];
  const gen = paperFold();
  console.log(gen.next());
  console.log(gen.next());
  while (true) {
    yield* [1, gen.next().value, 0, gen.next().value];
  }
}

const take = (n: number) => (gen: Generator) =>
  Array.from({ length: n }, () => gen.next().value);

console.log(take(20)(paperFold()));

// eslint-disable-next-line prettier/prettier
const GeneratorFunction = function* () {
  yield* [1, 2, 3];
};
const iterator = GeneratorFunction();
console.log(iterator.next().value);

const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

console.log(ta[0]);
ta[0] = 5;

Atomics.add(ta, 0, 12);
console.log(Atomics.load(ta, 0));
Atomics.and(ta, 0, 1);
console.log('ta: %o', ta);
console.log(Atomics.compareExchange(ta, 0, 5, 12));
