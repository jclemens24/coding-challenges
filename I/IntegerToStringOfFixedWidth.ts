/**
 * Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.
 *
 * Version 1 is most straightforward that covers all possible scenarios through if..else branches but version 3 is probably most intuitive
 */

const IntToStrFixedWidth = (number: number, width: number): string => {
  const str = number.toString();

  if (width > str.length) {
    return str.padStart(width, '0');
  } else if (width === str.length) {
    return str;
  } else {
    return str.slice(str.length - width);
  }
};

console.log(IntToStrFixedWidth(1234, 2));
console.log(IntToStrFixedWidth(1234, 4));
console.log(IntToStrFixedWidth(1234, 5));

const IntToStrFixedWidthV2 = (number: number, width: number): string => {
  return ('0'.repeat(5) + number).slice(-width);
};

console.log(IntToStrFixedWidthV2(1234, 2));
console.log(IntToStrFixedWidthV2(1234, 4));
console.log(IntToStrFixedWidthV2(1234, 5));

const IntToStrFixedWidthV3 = (number: number, width: number): string => {
  return `${number}`.padStart(width, '0').slice(-width);
};

console.log(IntToStrFixedWidthV3(1234, 2));
console.log(IntToStrFixedWidthV3(1234, 4));
console.log(IntToStrFixedWidthV3(1234, 5));
