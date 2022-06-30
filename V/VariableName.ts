function validVariableName(name: string): boolean {
  return /^[a-z_][a-z_0-9]*$/i.test(name);
}

console.log(validVariableName('var_1_Int'));
console.log(validVariableName('qq-q'));

function validVariableNameV2(name: string): boolean {
  const nameArr = name.split('');

  nameArr.forEach((str, i) => {
    if (i === 0 && helperIsDigit(str[i])) return false;
    if (
      !(helperIsDigit(str) || helperIsLetter(str) || helperIsUnderscore(str))
    ) {
      return false;
    }
  });
  return true;
}

function helperIsDigit(d: string): boolean {
  return '0123456789'.indexOf(d) !== -1;
}

function helperIsUnderscore(d: string): boolean {
  return '_'.indexOf(d) !== -1;
}

function helperIsLetter(d: string): boolean {
  return d.toLowerCase() !== d.toUpperCase();
}

console.log(validVariableNameV2('var_1_Int'));
