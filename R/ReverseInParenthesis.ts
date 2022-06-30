function ReverseInParenthesis(inputString: string): string {
  let str = inputString;
  while (str) {
    const last = str.indexOf(')');
    console.log('last: ', last);
    if (last === -1) break;
    const first = str.substring(0, last).lastIndexOf('(');
    console.log('first: ', first);
    const start = str.substring(0, first);
    const middle = str
      .substring(first + 1, last)
      .split('')
      .reverse()
      .join('');
    console.log('middle: ', middle);
    const end = str.substring(last + 1, str.length);
    console.log('end: ', end);
    str = start + middle + end;
  }
  return str;
}

console.log(ReverseInParenthesis('(bar)'));
