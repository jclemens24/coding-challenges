/** 
 * Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:

```
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo"
```
 */

export const encryptThis = (str: string): string => {
  const first = str.split(' ');
  let result: string = '';

  for (let i = 0; i < first.length; i++) {
    const word = first[i].split('');
    const temp = word[1];
    // [word[1], word[word.length - 1]] = [word[word.length - 1], word[1]];
    word[1] = word[word.length - 1];
    word[word.length - 1] = temp;
    result += word.join('') + ' ';
  }

  const strArr = result
    .split(' ')
    .map((s) => s.replace(/^\w/, (match) => `${match.charCodeAt(0)}`));

  return strArr.join(' ').trim();
};

console.log(encryptThis('A wise old owl lived in an oak'));

// Using only RegExp

export const encryptThisV2 = (str: string): string => {
  return str.replace(
    /\b(\S)(\S?)(\S*?)(\S?)\b/g,
    (_, a, b, c, d) => `${a.charCodeAt(0)}${d}${c}${b}`
  );
};

console.log(encryptThisV2('A wise old owl lived in an oak'));
