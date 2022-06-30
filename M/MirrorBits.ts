/* eslint-disable no-unused-vars */
/**
 * Reverse the order of the bits in a given integer
 *
 */

const MirrorBits = function (a: number): number {
  // performance.measure('version1');
  // console.time('mirror');
  return parseInt([...a.toString(2)].reverse().join(''), 2);
};

// MirrorBits(97);
// console.timeEnd('mirror');
// console.log(performance.getEntriesByName('version1')[0].duration);

const MirrorBitsV2 = function (a: number): number {
  // console.time('version2');
  let result = 0;
  while (a) {
    result = result << 1;
    result += a % 2;
    a = a >> 1;
  }
  // console.timeEnd('version2');
  return result;
};

// console.log(MirrorBitsV2(97));

// Ignore everything below this line, checking performance of each fn

function MeasurePerformance() {
  const startTime = performance.now();

  MirrorBits(97);

  const endTime = performance.now();
  return (endTime - startTime) / 1000;
}

function MeasureV2Performance() {
  const startTime = performance.now();
  MirrorBitsV2(97);
  const endTime = performance.now();
  return (endTime - startTime) / 1000;
}

// console.log(MeasurePerformance());
// console.log(MeasureV2Performance());

function BenchmarkV1() {
  performance.mark('version-1-start');
  MirrorBits(97);
  performance.mark('version-1-end');

  performance.mark('version-2-start');
  MirrorBitsV2(97);
  performance.mark('version-2-end');

  performance.measure('version1', 'version-1-start', 'version-1-end');
  performance.measure('version2', 'version-2-start', 'version-2-end');

  const v1 = performance.getEntriesByName('version1');
  const v2 = performance.getEntriesByName('version2');

  for (let i = 0; i < v1.length; i++) {
    console.table(v1[i].toJSON());
  }

  for (let j = 0; j < v2.length; j++) {
    console.table(v2[j].toJSON());
  }
}

BenchmarkV1();

// Create A Factorial Function

const Factorial = function (n: number): number {
  let result = n;

  if (n === 0 || n === 1) return 1;

  while (n > 1) {
    n = n - 1;
    result = result * n;
  }
  return result;
};
console.log(Factorial(6));

const FactorialV2 = function (n: number): number {
  if (n < 0) {
    return -1;
  }
  if (n === 0) return 1;
  else return n * FactorialV2(n - 1);
};

console.log(FactorialV2(6));

const FactorialV3 = function (n: number): number {
  if (n === 0 || n === 1) return 1;

  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
};

console.log(FactorialV3(6));

function BenchmarkFactorials() {
  performance.mark('factorial-1-start');
  Factorial(6);
  performance.mark('factorial-1-end');

  performance.mark('factorial-2-start');
  FactorialV2(6);
  performance.mark('factorial-2-end');

  performance.mark('factorial-3-start');
  FactorialV3(6);
  performance.mark('factorial-3-end');

  performance.measure('factorial1', 'factorial-1-start', 'factorial-1-end');
  performance.measure('factorial2', 'factorial-2-start', 'factorial-2-end');
  performance.measure('factorial3', 'factorial-3-start', 'factorial-3-end');

  const fact1 = performance.getEntriesByName('factorial1');
  const fact2 = performance.getEntriesByName('factorial2');
  const fact3 = performance.getEntriesByName('factorial3');

  for (let i = 0; i < fact1.length; i++) {
    console.table(fact1[0].toJSON());
  }
  for (let i = 0; i < fact2.length; i++) {
    console.table(fact2[0].toJSON());
  }
  for (let i = 0; i < fact3.length; i++) {
    console.table(fact3[0].toJSON());
  }
}

BenchmarkFactorials();
