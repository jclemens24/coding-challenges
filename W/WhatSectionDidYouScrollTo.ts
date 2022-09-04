/**
 * DESCRIPTION:
Your website is divided vertically in sections, and each can be of different size (height).
You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.

Example:
With scrollY = 300 and sizes = [300,200,400,600,100]

the result will be 1 as it's the second section.

With scrollY = 1600 and size = [300,200,400,600,100]

the result will be -1 as it's past last section.

Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).
 * 
 * 
 * @param scroll - The current scrollY number
 * @param sizes - an array of ints indicating the height of each section
 * @returns The index of the section that scrollY falls into
 */

export function getSectionId(scroll: number, sizes: number[]): number {
  const sectionTotal = sizes.reduce((acc, curr) => acc + curr, 0);
  if (scroll >= sectionTotal) return -1;
  let count: number = 0;

  for (let i = 0; i < sizes.length; i++) {
    scroll -= sizes[i];
    if (scroll < 0) {
      break;
    }
    count++;
  }
  return count;
}

console.log(getSectionId(1, [300, 200, 400, 600, 100]));
console.log(getSectionId(1599, [300, 200, 400, 600, 100]));
console.log(getSectionId(299, [300, 200, 400, 600, 100]));
console.log(getSectionId(300, [300, 200, 400, 600, 100]));
console.log(getSectionId(1600, [300, 200, 400, 600, 100]));
