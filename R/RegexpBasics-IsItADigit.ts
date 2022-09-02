/* eslint-disable no-extend-native */

declare global {
  // eslint-disable-next-line no-unused-vars
  interface String {
    digit(): boolean;
  }
}

String.prototype.digit = function (): boolean {
  return /^[0-9]$/g.test(this.toString());
};

console.log(''.digit());
console.log('7'.digit());

export {};
