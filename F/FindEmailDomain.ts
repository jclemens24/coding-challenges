function FindEmailDomain(address: string): string {
  const atSymbol = address.lastIndexOf('@');
  return address.substring(atSymbol + 1, address.length);
}

console.log(FindEmailDomain('prettyandsimple@example.com'));
console.log(FindEmailDomain('fully-qualified-domain@codesignal.com'));

function FindEmailDomainV2(address: string): string {
  return address.split('@')?.pop() || '';
}

console.log(FindEmailDomainV2('prettyandsimple@example.com'));
console.log(FindEmailDomainV2('fully-qualified-domain@codesignal.com'));

function FindEmailDomainV3(address: string): string {
  return address.slice(address.lastIndexOf('@') + 1);
}

console.log(FindEmailDomainV3('jclemens24@hotmail.com'));
