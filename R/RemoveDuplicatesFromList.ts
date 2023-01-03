/**
 * Define a function that removes duplicates from an array of numbers and returns it as a result.
    The order of the sequence has to stay the same.
 */

export const distinct = (a: number[]): number[] => {
  const b = new Set(a);
  return Array.from(b);
};

export const distinctV2 = (a: number[]): number[] => {
  return [...new Set(a)];
};
