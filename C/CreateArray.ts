/**
 * Given an integer `size`, return array of length `size` filled with `1`s.
 *
 */

function CreateArray(size: number): number[] {
  return new Array(size).fill(1);
}

console.log(CreateArray(4));

function CreateArrayV2(size: number): number[] {
  return Array(size).fill(1);
}

console.log(CreateArrayV2(4));
