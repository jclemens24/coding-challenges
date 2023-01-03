/* eslint-disable no-unused-vars */
/**
 * DESCRIPTION:
Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

Where Issuer is defined with the following enum type.

enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"

 */

enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown'
}

export const getIssuer = (x: number | bigint): Issuer => {
  if (/^3/gm.test(`${x}`) && `${x}`.length === 15) {
    return Issuer.AMEX;
  }

  if (/^4/gm.test(`${x}`) && (`${x}`.length === 13 || `${x}`.length === 16)) {
    return Issuer.VISA;
  }

  if (/(^5[1-5].*)/gm.test(`${x}`) && `${x}`.length === 16) {
    return Issuer.Mastercard;
  }

  if (/^60/gm.test(`${x}`) && `${x}`.length === 16) {
    return Issuer.Discover;
  }
  return Issuer.Unknown;
};

console.log(getIssuer(4111111111111111));
console.log(getIssuer(4111111111111));
console.log(getIssuer(4012888888881881));
console.log(getIssuer(378282246310005));
console.log(getIssuer(6011111111111117));
console.log(getIssuer(5105105105105100));
console.log(getIssuer(5105105105105106));
console.log(getIssuer(9111111111111111n));
