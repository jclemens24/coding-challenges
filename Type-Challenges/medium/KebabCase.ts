/* eslint-disable no-unused-vars */
/**
 * `FooBarBaz -> foo-bar-baz`
 */

type KebabCase<S extends string> = S extends `${infer First}${infer Next}`
  ? `${Lowercase<First>}${Next extends Uncapitalize<Next>
      ? ''
      : '-'}${KebabCase<Next>}`
  : S;

type Test = 'FooBarBaz';
type Result = KebabCase<Test>;

export {};
