/* eslint-disable no-unused-vars */
/**
 *
 */

class A {
  public str: string;
  public greetings: string;
  protected num: number;
  private bool: boolean;
  constructor() {
    this.str = 'typescript is beast';
    this.greetings = 'hello';
    this.num = 19260917;
    this.bool = true;
  }

  getNum() {
    return Math.random();
  }
}

type ClassPublicKeys<T, K = keyof T> = K extends keyof T ? K : never;

type Check = ClassPublicKeys<A>;
export {};
