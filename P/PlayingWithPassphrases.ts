/**
 * DESCRIPTION:
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?
 */

export function playPass(s: string, n: number): string {
  let result: string = '';

  for (let i = 0; i < s.length; i++) {
    if (
      (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
    ) {
      const code = s.charCodeAt(i) + 1;
      result +=
        i % 2
          ? String.fromCharCode(code).toLowerCase()
          : String.fromCharCode(code).toUpperCase();
    }

    if (Number.isInteger(+s.charAt(i))) {
      const complement = 9 - parseInt(s[i], 10);
      result += `${complement}`;
    }
  }
  return [...result].reverse().join('');
}

console.log(playPass('BORN IN 2015!', 1));
