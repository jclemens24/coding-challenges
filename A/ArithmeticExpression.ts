/**
 * Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.
 */

function isArithmeticExpression(a: number, b: number, c: number): boolean {
  const addition = a + b;
  const multiply = a * b;
  const subtraction = a - b;
  const division = a / b;

  return (
    c === addition || c === multiply || c === subtraction || c === division
  );
}

console.log(isArithmeticExpression(2, 3, 5));
console.log(isArithmeticExpression(8, 2, 4));
console.log(isArithmeticExpression(8, 3, 2));

function isArithmeticExpressionV2(a: number, b: number, c: number): boolean {
  // eslint-disable-next-line no-eval
  return [...'+-*/'].some((operator) => eval(`${a}${operator}${b}`) === c);
}

console.log(isArithmeticExpressionV2(2, 3, 5));
console.log(isArithmeticExpressionV2(8, 2, 4));
console.log(isArithmeticExpressionV2(8, 3, 2));
