function isDigit(symbol: string): boolean {
  return symbol.charCodeAt(0) >= 48 && symbol.charCodeAt(0) <= 57;
}

console.log(isDigit('0'));
console.log(isDigit('-'));

const isDigitV2 = (symbol: string): boolean => {
  return !isNaN(symbol as unknown as number);
};

console.log(isDigitV2('2'));
console.log(isDigitV2('-'));

const isDigitV3 = (symbol: string): boolean => {
  return !isNaN(parseInt(symbol, 10));
};

console.log(isDigitV3('10'));
console.log(isDigitV3('!'));

const isDigitV4 = (symbol: string): boolean => {
  return /\d/.test(symbol);
};

console.log(isDigitV4('1'));
console.log(isDigitV4('%'));
