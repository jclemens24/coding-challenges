/**
 * You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

Assuming that your hunch is correct, decode the message.
 */

const MessageToBinaryCode = function (code: string): string {
  let message: string = '';

  for (let i = 0; i < code.length; i += 8) {
    message += String.fromCharCode(parseInt(code.substring(i, i + 8), 2));
  }

  return message;
};

console.log(
  MessageToBinaryCode('010010000110010101101100011011000110111100100001')
);

const MessageToBinaryCodeV2 = function (code: string): string {
  return code.replace(/[01]{8}/g, (octet) => {
    return String.fromCharCode(parseInt(octet, 2));
  });
};

console.log(
  MessageToBinaryCodeV2('010010000110010101101100011011000110111100100001')
);
