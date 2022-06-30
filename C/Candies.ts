/**
 * n children have got m pieces of candy. They want to eat as much candy as the can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.
 * 
 @param {number} numChildren - number of children to split candy between
 @param {number} numCandies - number of candy to be divided
 @returns {number} number
 */

const Candies = function (numChildren: number, numCandies: number): number {
  return Math.floor(numCandies / numChildren) * numChildren;
};

console.log(Candies(3, 10));

const CandiesV2 = function (m: number, n: number): number {
  return n - (n % m);
};

console.log(CandiesV2(3, 10));
console.log(CandiesV2(9, 100));
