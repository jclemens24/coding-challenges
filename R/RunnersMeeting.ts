/**
 * Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).

If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.

For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return -1 instead.
 */

function RunnersMeeting(startPosition: number[], speed: number[]): number {
  let res = -1;
  const meetMap = new Map<number, number>();
  for (let j = 1; j < startPosition.length; j++) {
    const num1 = speed[j - 1] - speed[j];
    const num2 = startPosition[j] - startPosition[j - 1];
    if (isMeeting(num1, num2)) {
      const key = num1 === 0 ? 0 : num2 / num1;
      if (!meetMap.has(key)) meetMap.set(key, 2);
      else {
        if (meetMap.get(key)! + 1 === startPosition.length) {
          return meetMap.get(key)! + 1;
        }
        meetMap.set(key, meetMap.get(key)! + 1);
      }
    }
  }
  if (meetMap.size === 0) {
    return res;
  }
  const list: number[] = Array.from(meetMap.values());
  for (const i of list) {
    res = Math.max(res, i);
  }
  console.log(meetMap);
  console.log(res);
  return res;
}

function isMeeting(a: number, b: number) {
  return a === 0 ? b === 0 : true;
}

console.log(RunnersMeeting([1, 4, 2], [27, 18, 24]));
console.log(RunnersMeeting([1, 1000], [23, 22]));

function RunnersMeetingV2(startPosition: number[], speed: number[]): number {
  const x = (startPosition[1] - startPosition[0]) / (speed[0] - speed[1]);
  let i = 0;
  const times = [];

  while (i < speed.length) {
    times.push(speed[i] * x + startPosition[i]);
    i++;
  }
  let count = 0;
  for (let j = 0; j < times.length - 1; j++) {
    if (times[j] === Infinity) continue;
    if (times[j] === times[j + 1]) {
      count++;
    }
  }
  if (count) return ++count;
  return -1;
}

console.log(RunnersMeetingV2([1, 4, 2], [27, 18, 24]));
console.log(RunnersMeetingV2([1, 1000], [23, 22]));

function RunnersMeetingV3(startPosition: number[], speed: number[]): number {
  const meetings = [-1];

  for (let i = 0; i < startPosition.length; i += 1) {
    const singleMeetings = startPosition
      .slice(i + 1)
      .reduce((posArr: number[], val, j) => {
        let time = 0;
        const tempSpeed = speed.slice(i + 1);

        if (tempSpeed[j] !== speed[i]) {
          time = (startPosition[i] - val) / (tempSpeed[j] - speed[i]);
        }
        if (time > 0) posArr[time] = (posArr[time] || 1) + 1;
        return posArr;
      }, []);

    meetings.push(Math.max(...Object.values(singleMeetings)));
  }
  return Math.max(...meetings);
}

console.log(RunnersMeetingV3([1, 4, 2], [27, 18, 24]));
console.log(RunnersMeetingV3([1, 1000], [23, 22]));
