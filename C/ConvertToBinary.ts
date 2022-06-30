const aa = 12;
const bb = 25;
const cc = 12;

console.log(aa ^ bb ^ cc);
const dd = 21;
const ee = 12;
console.log(dd ^ ee);
console.log((21).toString(2));
console.log((12).toString(2));

function ConvertToBinary(num: number) {
  if (num < 0) {
    return (num >>> 0).toString(2);
  }
  let number = num;
  const result = [];
  while (number >= 1) {
    result.unshift(Math.floor(number % 2));
    number /= 2;
  }
  return result.join('');
}

console.log(ConvertToBinary(12));
console.log(ConvertToBinary(-55));

function SafestToBinary(num: number) {
  if (!Number.isSafeInteger(num)) {
    throw new TypeError('Parameter num must be a safe integer');
  }
  const isNegativeFlag = num < 0;
  const twosComplement = isNegativeFlag
    ? Number.MAX_SAFE_INTEGER + num + 1
    : num;
  const signed = isNegativeFlag ? '1' : '0';

  return twosComplement.toString(2).padStart(53, '0').padStart(64, signed);
}

function format(num: number) {
  console.log(SafestToBinary(2 ** 33 - 1));
  console.log(SafestToBinary(12));
}
format(2);
