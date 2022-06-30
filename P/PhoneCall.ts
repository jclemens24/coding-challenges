/* eslint-disable camelcase */
/**
 * Some phone usage rate may be described as follows:

  first minute of a call costs min1 cents,
  each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
  each minute after 10th costs min11 cents.
  You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

  @param min1 - Cost of first minute in cents
  @param min2_10 - Cost of minutes 2 - 10 in cents
  @param min11 - Cost of calls after 11 minutes
  @param s - The amount of money on your account (cents)
  @returns - The max duration phone call you can make
 */

function PhoneCall(
  min1: number,
  min2_10: number,
  min11: number,
  s: number
): number {
  if (s < min1) return 0;
  s -= min1;
  if (s < min2_10 * 9) return Math.floor(s / min2_10) + 1;
  s -= min2_10 * 9;
  return Math.floor(s / min11 + 10) || 0;
}

console.log(PhoneCall(3, 1, 2, 20));

function PhoneCallV2(
  min1: number,
  min2_10: number,
  min11: number,
  s: number
): number {
  const ledger: { [key: string]: number }[] = [
    { value: min1, time: 1 },
    { value: min2_10, time: min2_10 * 9 },
    { value: min11 }
  ];
  const tracker = { minutes: 0, moneyLeft: s };

  for (let i = 0; i < ledger.length; i++) {
    const account = Math.floor(tracker.moneyLeft / ledger[i].value);
    const minutes =
      ledger[i].time > account ? account : ledger[i].time || account;
    tracker.minutes += minutes;
    if (ledger[i].time > minutes) {
      break;
    }
    tracker.moneyLeft -= minutes * ledger[i].value;
  }
  return tracker.minutes;
}

console.log(PhoneCallV2(3, 1, 2, 20));
