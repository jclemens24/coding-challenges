/**
 * Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.
 */

export function binaryToString(binary: string): string {
  const binArray = binary.match(/.{8}/g);

  console.log(binArray);
  if (binArray) {
    const codes = binArray
      .map((bits) => parseInt(bits, 2))
      .map((code) => String.fromCharCode(code));
    return codes.join('');
  } else {
    return '';
  }
}

console.log(binaryToString('01100001'));
console.log(binaryToString('00110001001100000011000100110001'));

export function binaryToStringV2(binary: string): string {
  return binary.replace(/[01]{8}/g, (bin) =>
    String.fromCharCode(parseInt(bin, 2))
  );
}

console.log(binaryToStringV2('01100001'));
console.log(binaryToStringV2('00110001001100000011000100110001'));

// This is how I originally tackled the problem before refactors

export function binaryToStringV3(binary: string): string {
  const separate: string[] = [];
  const EightBits = 8 as const;
  for (let i = 0; i < binary.length; i += EightBits) {
    separate.push(binary.substring(i, i + EightBits));
  }

  return separate
    .map((bits) => String.fromCharCode(parseInt(bits, 2)))
    .join('');
}
