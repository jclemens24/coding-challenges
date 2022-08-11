/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
```
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
```
 */

export class Kata {
  static validatePin(pin: string): boolean {
    const regexp = /^(\d{4}|\d{6})$/;
    return regexp.test(pin);
  }
}

console.log(Kata.validatePin('1234'));
console.log(Kata.validatePin('45875'));

export class Kata1 {
  static validatePin(pin: string): boolean {
    // eslint-disable-next-line prefer-regex-literals
    const isValidPin = new RegExp('^(\\d{4}|\\d{6})$');
    return isValidPin.test(pin);
  }
}

console.log(Kata1.validatePin('459867'));
