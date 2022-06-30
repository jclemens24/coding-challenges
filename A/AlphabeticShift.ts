function AlphabeticShift(inputString: string): string {
  const input = inputString
    .split('')
    .map((str) => {
      const char = str.charCodeAt(0) + 1;
      return String.fromCharCode(char > 122 ? 97 : char);
    })
    .join('');

  return input;
}

console.log(AlphabeticShift('crazy'));

function AlphabeticShiftV2(inputStr: string): string {
  const alpha = 'abcdefghijklmnopqrstuvwxyza';
  return inputStr.replace(/./g, (x) => alpha[alpha.indexOf(x) + 1]);
}

console.log(AlphabeticShiftV2('crazy'));
