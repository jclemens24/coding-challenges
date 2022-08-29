/**
 * A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
  1. Float parameter "h" in meters must be greater than 0
  2. Float parameter "bounce" must be greater than 0 and less than 1
  3. Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
```
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 
```
(Condition 2) not fulfilled).
 */

export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  if (!(h > 0) || !(bounce > 0 && bounce < 1) || window > h) return -1;

  let count: number = 0;
  let ballHeight = h;

  while (ballHeight > window) {
    count += 2;
    ballHeight = ballHeight * bounce;
  }

  return count - 1;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30, 0.75, 1.5));
console.log(bouncingBall(30, 0.4, 10));

export function bouncingBallV2(
  h: number,
  bounce: number,
  window: number
): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  return 2 * Math.ceil(Math.log(window / h) / Math.log(bounce)) - 1;
}

console.log(bouncingBallV2(3.0, 0.66, 1.5));
console.log(bouncingBallV2(30, 0.75, 1.5));
console.log(bouncingBallV2(30, 0.4, 10));

// Using recursion

export function bouncingBallV3(
  h: number,
  bounce: number,
  window: number
): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  return 2 + bouncingBallV3(h * bounce, bounce, window);
}

console.log(bouncingBallV3(3.0, 0.66, 1.5));
console.log(bouncingBallV3(30, 0.75, 1.5));
console.log(bouncingBallV3(30, 0.4, 10));
