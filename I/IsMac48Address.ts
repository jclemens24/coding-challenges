/**
 * A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.
 */

function isMac48Address(inputString: string): boolean {
  return /^([0-9a-f]{2}-){5}([0-9a-f]{2})$/i.test(inputString);
}

console.log(isMac48Address('00-1B-63-84-45-E6'));

const isMac48AddressV2 = (inputString: string): boolean => {
  const digitsOnly = inputString.split('-');
  if (digitsOnly.length !== 6) return false;
  for (const i of digitsOnly) {
    if (i.length !== 2 || isNaN(parseInt(i, 16)) || isNaN(parseInt(i[1], 16))) {
      return false;
    }
  }
  return true;
};

console.log(isMac48AddressV2('00-1B-63-84-45-E6'));
