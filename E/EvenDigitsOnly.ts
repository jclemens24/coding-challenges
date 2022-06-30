function EvenDigitsOnly(n: number): boolean {
  const str = n.toString(10).split('');

  const filtered = str.filter((s, i) => +s % 2 === 0).join('');

  const backToNum = parseInt(filtered, 10);

  return backToNum === n;
}

console.log(EvenDigitsOnly(248622));
console.log(EvenDigitsOnly(642386));

function EvenDigitsOnlyV2(n: number): boolean {
  return !(n + '').match(/[13579]/);
}

console.log(EvenDigitsOnlyV2(24862222));

function EvenDigitsOnlyV3(n: number): boolean {
  return (n + '').split('').every((num) => +num % 2 === 0);
}

console.log(EvenDigitsOnlyV3(594837563));
