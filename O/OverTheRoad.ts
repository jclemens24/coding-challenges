export function OverTheRoad(address: number, streetLength: number): number {
  return 2 * streetLength - (address - 1);
}

console.log(OverTheRoad(1, 3));
console.log(OverTheRoad(3, 5));
