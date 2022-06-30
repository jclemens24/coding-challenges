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
