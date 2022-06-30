const LongestDigitsPrefix = (inputString: string): string => {
  return inputString.match(/[0-9]+/)?.shift() || '';
};

console.log(LongestDigitsPrefix('123aa1'));

const LongestDigitsPrefixV2 = (inputString: string): string => {
  const matches = inputString.match(/^\d*/);
  return matches ? matches[0] : '';
};

console.log(LongestDigitsPrefixV2('123aa1'));
