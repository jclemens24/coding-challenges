function isBeautifulString(inputString: string): boolean {
  const alphaMap = new Array(26).fill(0);
  inputString.split('').map((val) => alphaMap[val.charCodeAt(0) - 97]++);
  let max = alphaMap[0];
  return alphaMap.every((val) => max >= val && ((max = val), 1));
}

console.log(isBeautifulString('bbbaacdafe'));

function isBeautifulStringV2(inputString: string): boolean {
  const a = new Array(26).fill(0);
  inputString.split('').map((v) => a[Buffer.from(v)[0] - 97]);
  let m = a[0];
  return a.every((v) => m >= v && ((m = v), 1));
}

console.log(isBeautifulStringV2('bbbaacdafe'));

const buffer = new ArrayBuffer(8);
const z = new Int32Array(buffer, 0, 2);
console.log(z);
console.log(z.BYTES_PER_ELEMENT);
console.log(z.byteLength);

const otherBuff = new Uint8Array([72, 101, 108, 108, 111]).buffer;
const dataView = new DataView(otherBuff);

console.log(dataView.getUint8(3));
console.log(dataView.getUint16(1));

function concatTypedArrays(...arrays: Uint8Array[]) {
  const arr: number[] = [];
  arrays.forEach((item) => arr.push(...item));
  return new Uint8Array(arr);
}

console.log(
  concatTypedArrays(new Uint8Array([255, 255]), new Uint8Array([255, 255]))
);

console.log(concatTypedArrays.constructor.name);

console.log(new TextDecoder().decode(otherBuff));
