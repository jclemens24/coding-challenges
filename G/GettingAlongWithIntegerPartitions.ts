export function part(n: number): string {
  const data = [...new Set(prod(n, n))].sort((a, b) => a - b) as number[];
  const mean = sum(data) / (data.length || 1);
  const half = (data.length - 1) >> 1;
  const center = data.slice(half, data.length - half);
  const median = sum(center) / center.length;
  return `Range: ${
    Math.max(...data) - Math.min(...data)
  } Average: ${mean.toFixed(2)} Median: ${median.toFixed(2)}`;
}

const sum = (arr: number[]) => arr.reduce((acc, curr) => acc + curr, 0);

const prod = function* (
  n: number,
  top: number,
  p: number = 1
): Generator<number, any, any> {
  if (top < 2) {
    yield p;
  } else {
    for (let i = 1; i <= top; i++) {
      yield* prod(n - i, Math.min(i, n - i), p * i);
    }
  }
};
