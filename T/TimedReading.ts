/**
 * Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.
Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.
 */

const TimedReading = (maxLength: number, text: string): number => {
  const allWords = text.match(/\w+/gm);
  return allWords?.filter((str) => str.length <= maxLength).length || 0;
};

console.log(TimedReading(4, "The Fox asked the stork, 'How is the soup?'"));
console.log(TimedReading(1, '...'));
console.log(TimedReading(3, 'This play was good for us.'));

const TimedReadingV2 = (maxLength: number, text: string): number => {
  return text
    .split(/[^a-z]+/i)
    .filter((str) => str.length > 0 && str.length <= maxLength).length;
};

console.log(TimedReadingV2(4, "The Fox asked the stork, 'How is the soup?'"));
console.log(TimedReadingV2(1, '...'));

const TimedReadingV3 = (maxLength: number, text: string): number => {
  const regexp = new RegExp('\\b\\w{1,' + maxLength + '}\\b', 'g');
  const words = text.match(regexp) || '';
  return words.length;
};

console.log(TimedReadingV3(4, "The Fox asked the stork, 'How is the soup?'"));
console.log(TimedReadingV3(1, '...'));
