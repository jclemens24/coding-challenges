/* eslint-disable no-extend-native */
/**
 * Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
```
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
```
 */

// eslint-disable-next-line no-unused-vars
interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}

String.prototype.toJadenCase = function () {
  const jadenSentenceArr = this.split(' ') as Array<string>;
  return jadenSentenceArr
    .map((str) => {
      return str.substring(0, 1).toUpperCase() + str.substring(1);
    })
    .join(' ');
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
