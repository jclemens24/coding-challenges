const FirstDigit = (inputStr: string) => {
  for (let i = 0; i < inputStr.length; i++) {
    const toNum = parseInt(inputStr[i], 10);

    if (toNum >= 0) return inputStr[i];
  }
  return '';
};

console.log(FirstDigit('var_1__Int'));

const FirstDigitV2 = (inputString: string): string => {
  return inputString.match(/\d/)?.shift() || '';
};

console.log(FirstDigitV2('var_1__Int'));

const FirstDigitV3 = (inputStr: string): string => {
  return inputStr[inputStr.search(/\d/)];
};

console.log(FirstDigitV3('var_2__Int'));
