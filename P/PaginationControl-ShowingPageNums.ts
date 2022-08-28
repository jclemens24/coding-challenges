/**
 * You are building a pagination control that will meet the following requirements:

Should always show the first and last page
Should show N pages to navigate before and after the current page (not counting the first and last)
If there is a single page it should return an empty array
For example:

Total pages: 10
Current page: 5
Items before/after: 2
Expected: [1, (always) 3,4 (2 before) ,5, (center) 6,7, (2 after) 10] (always)
Another example:

Total pages: 36
Current page: 1
Items before and after: 5
Expected [1 (always) 2,3,4,5,6 (5 before) ,7, (center) 8,9,10,11,12, (5 after) 36] (always)
img1

Current page 7:

img2

Current page 8:

img3

The "center" is one way to look at it. The important thing is that the number of pages keep consistent so the user will have a nice experience.

When the current page is, for example, 1 if you subtract 5 from the "center" you would get negative values. Negative pages are invalid, so you have to compensate these pages to the right side. The same goes when your page goes over the total pages, you have to compensate left.

Complete the function so it returns an array with the items for you to render on screen!

You can use the pre-loaded printPages to see how your result looks like.
 */

export const getPages = (
  length: number,
  currentPage: number,
  size: number
): number[] => {
  if (length === 1) return [];
  const next = Math.min(size * 2 + 1, length - 2);
  const beginning = Math.min(Math.max(currentPage - size, 2), length - next);
  return [1, ...new Array(next).fill(0).map((_, i) => i + beginning), length];
};

console.log(getPages(10, 5, 2));
console.log(getPages(36, 1, 5));
