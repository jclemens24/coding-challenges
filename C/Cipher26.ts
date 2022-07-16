/**
 * You've intercepted an encrypted message, and you are really curious about its contents. You were able to find out that the message initially contained only lowercase English letters, and was encrypted with the following cipher:

Let all letters from 'a' to 'z' correspond to the numbers from `0` to `25`, respectively.

The number corresponding to the ith letter of the encrypted message is then equal to the sum of numbers corresponding to the first i letters of the initial unencrypted `message` modulo `26`.

Now that you know how the message was encrypted, implement the algorithm to decipher it.
 */

function Cipher(message: string): string {
  let sum = 0;
  return message
    .split('')
    .map((letter) => {
      const decrypted = (letter.charCodeAt(0) - 97 - sum + 26) % 26;
      sum = (sum + decrypted) % 26;
      return String.fromCharCode(decrypted + 97);
    })
    .join('');
}

console.log(Cipher('taiaiaertkixquxjnfxxdh'));

function CipherV2(message: string): String {
  // eslint-disable-next-line no-new-wrappers
  let decryptedMessage = new String();
  let next = 0;
  let prev = 0;

  for (let i = 0; i < message.length; i++) {
    const ltr = message[i].charCodeAt(0) - 97;
    next = ltr - prev;
    if (next < 0) next += 26;
    decryptedMessage += String.fromCharCode(next + 97);
    prev = ltr;
  }
  return decryptedMessage;
}

console.log(CipherV2('taiaiaertkixquxjnfxxdh'));
