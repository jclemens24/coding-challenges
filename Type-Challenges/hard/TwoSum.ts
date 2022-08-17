/* eslint-disable no-unused-vars */
/**
 * Given an array of integers nums and an integer target, return true if two numbers such that they add up to target.
 */

type ConstructArray<
  Length extends number,
  Arr extends readonly number[] = []
> = Arr['length'] extends Length ? Arr : ConstructArray<Length, [...Arr, any]>;

type Diff<
  NumOne extends number,
  NumTwo extends number
> = ConstructArray<NumOne> extends [...ConstructArray<NumTwo>, ...infer Rest]
  ? Rest['length']
  : -1;

type TwoSum<
  Nums extends readonly number[],
  Target extends number
> = Nums extends [Nums[0], ...infer Rest]
  ? Diff<Target, Nums[0]> extends Rest[number]
    ? true
    : Rest extends readonly number[]
    ? TwoSum<Rest, Target>
    : false
  : false;

type test1 = Diff<3, 1>;
type test2 = ConstructArray<2>;
type Result = TwoSum<[10, 12, 15, 1, 5, 6], 13>;

export {};
