/**
 * Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base `26`, and its digits are represented by English capital letters - `A` for `0`, `B` for `1`, and so on.

The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.

@link {https://www.asciitable.com/}
A = 65, Z = 90
 */

const NewNumeralSystem = (number: string): string[] => {
  const decimal = number.charCodeAt(0);
  return Array(Math.ceil((decimal - 64) / 2))
    .fill(0)
    .map(
      (_, i) =>
        `${String.fromCharCode(65 + i)} + ${String.fromCharCode(decimal - i)}`
    );
};

console.log(NewNumeralSystem('G'));

const NewNumeralSystemV2 = (number: string): string[] => {
  const result = [];
  let first = 'A'.charCodeAt(0);
  let last = number.charCodeAt(0);

  while (first <= last) {
    result.push(`${String.fromCharCode(first)} + ${String.fromCharCode(last)}`);
    first++;
    last--;
  }
  return result;
};

console.log(NewNumeralSystemV2('G'));
console.log(NewNumeralSystemV2('A'));
console.log(NewNumeralSystemV2('D'));
