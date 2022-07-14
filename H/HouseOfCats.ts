/**
 * There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.
 */

const HouseOfCats = function (legs: number): number[] {
  const length = Math.floor(legs / 4) + 1;

  const peopleArr = Array(length).fill(0);
  return peopleArr.map((_, i) => (legs - 4 * (length - i - 1)) / 2);
};

console.log(HouseOfCats(6));

const HouseOfCatsV2 = (legs: number): number[] => {
  return [...Array(legs / 2 + 1).keys()].filter(
    (i) => (legs - 2 * i) % 4 === 0
  );
};

console.log(HouseOfCatsV2(6));
