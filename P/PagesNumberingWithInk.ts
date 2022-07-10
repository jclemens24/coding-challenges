/** 
 * You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).

It's guaranteed that you can number the current page, and that you can't number the last one in the book.
*/

function NumberedPages(current: number, numberOfDigits: number): number {
  let inkedPages;

  for (inkedPages = current; numberOfDigits > 0; inkedPages++) {
    numberOfDigits -= inkedPages.toString(10).split('').length;
  }
  return numberOfDigits < 0 ? inkedPages - 2 : inkedPages - 1;
}

console.log(NumberedPages(1, 5));

function NumberedPagesV2(current: number, numberOfDigits: number): number {
  while (numberOfDigits >= current.toString().length) {
    numberOfDigits -= current.toString().split('').length;
    current++;
  }
  return current - 1;
}

console.log(NumberedPagesV2(1, 5));
console.log(NumberedPagesV2(76, 250));
