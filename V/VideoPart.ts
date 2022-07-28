/**
 * You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.
 *
 * Notes for this problem:
 * There are 3600 seconds in 1 Hour
 * There are 60 seconds in 1 Minute
 */

function VideoPart(part: string, total: string): number[] {
  const globalCommonDenominator = (a: number, b: number): number => {
    if (!b) return a;
    return globalCommonDenominator(b, a % b);
  };

  const p = part.split(':').map((str) => parseInt(str));
  const t = total.split(':').map((str) => parseInt(str));
  const watched = p[0] * 3600 + p[1] * 60 + p[2];
  const totalVideoLength = t[0] * 3600 + t[1] * 60 + t[2];
  const d = globalCommonDenominator(watched, totalVideoLength);

  return [watched / d, totalVideoLength / d];
}

console.log(VideoPart('02:20:00', '07:00:00'));
console.log(VideoPart('00:02:20', '00:10:00'));
