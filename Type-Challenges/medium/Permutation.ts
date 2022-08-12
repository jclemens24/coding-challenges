/* eslint-disable no-unused-vars */
/**
 * Implement permutation type that transforms union types into the array that includes permutations of unions.
 *
 * ```
 * type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
 * ```
 */

type Permutation<T, U = T> = [U] extends [never]
  ? []
  : U extends T
  ? [U, ...Permutation<Exclude<T, U>>]
  : [];

type perm = Permutation<'A' | 'B' | 'C'>;
