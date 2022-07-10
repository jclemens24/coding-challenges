/**
 *A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?
 */

const getCoordinates = function (a: number, b: number): number {
  const bisect1 = Math.floor(Math.sqrt((a * a) / 2));
  const bisect2 = Math.floor(Math.sqrt((b * b) / 2));
  console.log(bisect1, bisect2);

  return (bisect1 * bisect2 + Math.floor((bisect1 + bisect2) / 2)) * 2 + 1;
};

console.log(getCoordinates(6, 4));

const getCoordinatesV2 = function (a: number, b: number): number {
  const DIVISOR = Math.sqrt(2);

  a = Math.floor(a / DIVISOR);
  b = Math.floor(b / DIVISOR);

  return (2 * a * b + a + b) | 1;
};

console.log(getCoordinatesV2(6, 4));
