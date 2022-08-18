/* eslint-disable no-unused-vars */

/**
 * Implement the advanced util type `OptionalKeys<T>`, which packs all the optional keys into a union.
 */

type OptionalKeys<
  T extends object,
  K extends keyof T = keyof T
> = K extends keyof T ? (T[K] extends Required<T>[K] ? never : K) : never;

type Result3 = OptionalKeys<{ age?: number; name: string; address?: string }>;

export {};
