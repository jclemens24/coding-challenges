/**
 * An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part.
 * @param {string} address - The email address given string 
 * @returns {string} - A substring that contains only the domain of an email address
 */

performance.mark('version-1-start');
function FindEmailDomain(address: string): string {
  const atSymbol = address.lastIndexOf('@');
  return address.substring(atSymbol + 1, address.length);
}
performance.mark('version-1-end');

console.log(FindEmailDomain('prettyandsimple@example.com'));
console.log(FindEmailDomain('fully-qualified-domain@codesignal.com'));

performance.mark('version-2-start');
function FindEmailDomainV2(address: string): string {
  return address.split('@')?.pop() || '';
}
performance.mark('version-2-end');

console.log(FindEmailDomainV2('prettyandsimple@example.com'));
console.log(FindEmailDomainV2('fully-qualified-domain@codesignal.com'));

performance.mark('version-3-start');
function FindEmailDomainV3(address: string): string {
  return address.slice(address.lastIndexOf('@') + 1);
}
performance.mark('version-3-end');

console.log(FindEmailDomainV3('jclemens24@hotmail.com'));
performance.measure('measure', {
  start: 'version-1-start',
  end: 'version-1-end'
});

performance.measure('measure', {
  start: 'version-2-start',
  end: 'version-2-end'
});

performance.measure('measure', {
  start: 'version-3-start',
  end: 'version-3-end'
});

console.log(performance.getEntriesByType('measure'));
