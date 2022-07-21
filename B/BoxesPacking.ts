/**
 * You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of n different numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n the box number pi can be put into the box number pi+1.
A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.
 */

const BoxesPacking = (
  length: number[],
  width: number[],
  height: number[]
): boolean => {
  let boxes: number[][] = [];

  for (let i = 0; i < length.length; i++) {
    boxes.push([length[i], width[i], height[i]]);
  }
  boxes = boxes
    .map((box) => box.sort((a, b) => a - b))
    .sort((a, b) => a[0] - b[0]);

  console.log(boxes);

  for (let i = 0; i < boxes.length - 1; i++) {
    for (let j = 0; j < boxes[i].length; j++) {
      if (boxes[i][j] >= boxes[i + 1][j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(BoxesPacking([1, 3, 2], [1, 3, 2], [1, 3, 2]));
