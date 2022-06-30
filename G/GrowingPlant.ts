function GrowingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  return upSpeed > desiredHeight
    ? 1
    : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}

console.log(GrowingPlant(100, 10, 910));

function GrowingPlantV2(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  let curr: number = 0;
  let day: number = 0;
  while (curr < desiredHeight) {
    curr += upSpeed;
    day++;
    if (curr >= desiredHeight) {
      break;
    }
    curr -= downSpeed;
  }
  return day;
}

console.log(GrowingPlantV2(10, 9, 4));
