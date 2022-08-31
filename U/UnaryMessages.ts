/**
 * DESCRIPTION:
Binary with 0 and 1 is good, but binary with only 0 is even better! Originally, this is a concept designed by Chuck Norris to send so called unary messages.

Can you write a program that can send and receive this messages?

Rules
The input message consists of ASCII characters between 32 and 127 (7-bit)
The encoded output message consists of blocks of 0
A block is separated from another block by a space
Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):
First block is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
The number of 0 in the second block is the number of bits in the series
Example
Let’s take a simple example with a message which consists of only one character (Letter 'C').
'C' in binary is represented as 1000011, so with Chuck Norris’ technique this gives:
0 0 - the first series consists of only a single 1
00 0000 - the second series consists of four 0
0 00 - the third consists of two 1
So 'C' is coded as: 0 0 00 0000 0 00

Second example, we want to encode the message "CC" (i.e. the 14 bits 10000111000011) :
0 0 - one single 1
00 0000 - four 0
0 000 - three 1
00 0000 - four 0
0 00 - two 1
So "CC" is coded as: 0 0 00 0000 0 000 00 0000 0 00
Note of thanks
Thanks to the author of the original kata. I really liked this kata. I hope that other warriors will enjoy it too.
 */

export function send(text: string): string {
  let output: string = '';
  let concatBin: string = '';

  for (const letter of text) {
    const bin = letter.charCodeAt(0).toString(2);
    console.log(bin);
    if (bin.length <= 6) {
      concatBin += '0';
    }
    concatBin += bin;
  }
  const counts: any[] = [];
  const digits: any[] = [];
  let count: number = 0;
  let previous = concatBin[0];
  console.log('concatBin %s', concatBin);
  for (const num of concatBin) {
    if (num === previous) count += 1;
    else {
      counts.push(count);
      count = 1;
      if (num === '0') {
        digits.push('1');
        previous = '0';
      } else if (num === '1') {
        digits.push('0');
        previous = '1';
      }
    }
  }
  digits.push(previous);
  counts.push(count);
  console.log('counts: %o', counts);
  console.log('digits: %o', digits);
  for (const [i, value] of digits.entries()) {
    if (value === '1') {
      output += ' 0 ' + '0'.repeat(counts[i]);
    } else {
      output += ' 00 ' + '0'.repeat(counts[i]);
    }
  }
  return output.trim();
}

export function receive(text: string): string {
  const message = text
    .replace(/(0?0\s0+)/g, (match) => {
      if (match.charAt(1) === '0') {
        const count = match.split(' ')[1].length;
        return '0'.repeat(count);
      } else {
        const count = match.split(' ')[1].length;
        return '1'.repeat(count);
      }
    })
    .replace(/\s/g, '');

  const output: string[] = [];
  for (let i = 0; i < message.length; i += 7) {
    output.push(message.slice(i, i + 7));
  }

  return output.map((str) => String.fromCharCode(parseInt(str, 2))).join('');
}

console.log(send('CC'));
console.log(receive('0 0 00 0000 0 00'));

// Version 2 below here

export function sendV2(text: string): string {
  return [...text]
    .map((char) => char.charCodeAt(0).toString(2).padStart(7, '0'))
    .join('')
    .replace(
      /1+|0+/g,
      (char) => `0${char.charAt(0) > '0' ? '' : '0'} ${'0'.repeat(char.length)}`
    );
}

export function receiveV2(text: string): string {
  return text
    .replace(/(0+) (0+)/g, (_, t, z) => {
      console.log('_', _);
      console.log('t', t);
      console.log('z', z);
      return (t === '0' ? '1' : '0').repeat(z.length);
    })
    .replace(/ /g, '')
    .replace(/.{7}/g, (c) => String.fromCharCode(parseInt(c, 2)));
}

console.log(sendV2('CC'));
console.log(receiveV2('0 0 00 0000 0 00'));
