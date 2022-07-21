/**
 * Consider a string containing only letters and whitespaces. It is allowed to replace some (possibly, none) whitespaces with newline symbols to obtain a multiline text. Call a multiline text beautiful if and only if each of its lines (i.e. substrings delimited by a newline character) contains an equal number of characters (only letters and whitespaces should be taken into account when counting the total while newline characters shouldn't). Call the length of the line the text width.

Given a string and some integers `l` and `r` `(l ≤ r)`, check if it's possible to obtain a beautiful text from the string with a text width that's within the range `[l, r]`.
 */

const BeautifulText = (inputString: string, l: number, r: number): boolean => {
  for (let i = l; i <= r; i++) {
    const exp = new RegExp(`^(.{${i}}\\s)+.{${i}}$`);
    if (exp.test(inputString)) return true;
  }
  return false;
};

console.log(BeautifulText('Look at this example of a correct text', 5, 15));
console.log(BeautifulText('abc def ghi', 4, 11));
