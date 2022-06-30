/**
 *
 * Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.
 *
 * @summary Its important to note the while loop nested inside the for loop will not execute until product % 2 === 0
 *
 * @param {number} product A given number
 * @returns {number} Returns the number whose digits multiply to equal given product input
 */

const DigitProducts = function (product: number): number {
  if (product === 0) return 10;
  if (product === 1) return 1;

  let digits: string = '';

  for (let i = 9; i > 1; i--) {
    while (product % i === 0) {
      console.log('i ', i);
      product /= i;
      console.log('product: ', product);
      digits = `${i}${digits}`;
      console.log('digits: %d', digits);
    }
  }

  if (product > 1) return -1;
  return Number(digits);
};

console.log(DigitProducts(12));
// console.log(DigitProducts(19));

const DigitProductsV2 = function (product: number): number {
  if (product === 0) return 10;
  if (product === 1) return 1;

  const factors: number[] = [];

  for (let i = 9; i > 1; i--) {
    while (product % i === 0) {
      console.log('i ', i);
      factors.unshift(i);
      console.log(`factors: `, factors);
      product /= i;
      console.log(`products: `, product);
    }
  }
  return product > 1 ? -1 : parseInt(factors.join(''));
};

console.log(DigitProductsV2(12));
console.log(DigitProductsV2(19));
