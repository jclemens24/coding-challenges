/**
 * Return the Sum of 2 arrays
 */

export function arrayPlusArray(arr1: number[], arr2: number[]): number {
  return (
    arr1.reduce((prev, curr) => prev + curr, 0) +
    arr2.reduce((prev, curr) => prev + curr, 0)
  );
}

export const arrayPlusArrayV2 = (arr1: number[], arr2: number[]): number => {
  return arr1.concat(arr2).reduce((prev, curr) => prev + curr, 0);
};
