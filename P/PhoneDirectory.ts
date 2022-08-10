/* eslint-disable prefer-regex-literals */
/**
 * John keeps a backup of his old personal phone book as a text file. On each line of the file he can find the phone number (formated as +X-abc-def-ghij where X stands for one or two digits), the corresponding name between < and > and the address.

Unfortunately everything is mixed, things are not always in the same order; parts of lines are cluttered with non-alpha-numeric characters (except inside phone number and name).

Examples of John's phone book lines:

```
`/+1-541-754-3010 156 Alphand_St. <J Steeve>\n`

`133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n`

`<Anastasia> +48-421-674-8974 Via Quirinal Roma\n`
```

Could you help John with a program that, given the lines of his phone book and a phone number num returns a string for this number : `Phone => num, Name => name, Address => adress`

It can happen that there are many people for a phone number num, then return : `Error => Too many people: num`

or it can happen that the number num is not in the phone book, in that case return: `Error => Not found: num`
 */

export const phone = (strng: string, num: string): string => {
  const addressEntries = strng.split(/\n/g);

  return addressEntries.reduce((acc, curr, i, book) => {
    const findPhoneRegExp = new RegExp(`${num}`, 'g');
    const phone = new RegExp(/.?\d?.?\d{2,3}.?\d{3}.?\d{4}/, 'g');
    const name = new RegExp(/<\s?\D+\s?\D{0,}\s?>/, 'g');
    let result = '';
    const phoneArr: string[] = [];
    const nameArr: string[] = [];
    const addressArr: string[] = [];

    for (let i = 0; i < addressEntries.length; i++) {
      let entry = book[i];
      if (entry.match(name) && entry.match(findPhoneRegExp)) {
        nameArr.push(
          entry
            .match(name)![0]
            .replace(/<\s?(\D\s?\D{0,})\s?>/g, '$1')
            .trim()
        );
        phoneArr.push(entry.match(findPhoneRegExp)![0]);
        entry = entry.replace(phone, '');
        entry = entry.replace(name, '');
        addressArr.push(entry.replace(/[/$!?*;:,+]+/g, '').trim());
      }
    }

    if (!phoneArr.find((num) => phone.test(num)))
      return `Error => Not found: ${num}`;
    if (phoneArr.length > 1) return `Error => Too many people: ${num}`;

    result += `Phone => ${phoneArr[0]}, `;
    result += `Name => ${nameArr[0]}, `;
    result += `Address => ${addressArr[0]}`
      .replace(/[_]+/g, ' ')
      .replace(/\s{2,}/g, ' ');

    return result;
  });
};

export function phoneV2(strng: string, num: string): string {
  const addressBook: string[] = strng.split(/\n/);

  const search = addressBook.filter((line) => line.indexOf(num) > -1);

  if (!search.length) return `Error => Not found: ${num}`;
  if (search.length > 1) return `Error => Too many people: ${num}`;

  const current = search[0];
  const name = /<(.*?)>/.exec(current)![0].trim();
  const address = current
    .replace(name, '')
    .replace(num, '')
    .replace(/[+*;/?$,:]/g, '')
    .replace(/\s\s+/g, ' ')
    .replace(/_/g, ' ')
    .trim();

  return `Phone => ${num}, Name => ${name.replace(
    /[+*/-<>]/g,
    ''
  )}, Address => ${address}`;
}

const dr =
  '/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n' +
  '+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n' +
  '+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n' +
  '+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n' +
  '<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n' +
  '<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n' +
  "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n" +
  '<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n' +
  '<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n' +
  '+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n' +
  '<P Salinge> Main Street, +1-098-512-2222, Denve\n' +
  '/+5-541-754-3010 156 Alphandria_Street. <Jr Part>\n 1333, Green, Road <F Fulgur> NW-46423 ;+6-541-914-3010!\n' +
  '+5-541-984-3012 <Peter Reeves> /PO Box 5300; Albertville, SC-28573\n :+5-321-512-2222 <Paulo Divino> Boulder Alley ZQ-87209\n' +
  '+3-741-984-3090 <F Flanaghan> _Chicago Av.\n :+3-921-333-2222 <Roland Scorsini> Bellevue_Street DA-67209\n' +
  '+8-111-544-8973 <Laurence Pantow> SA\n +8-921-512-2222 <Raymond Stevenson> Joly Street EE-67209\n' +
  '<John Freeland> Mantow ?+2-121-544-8974 \n <Robert Mitch> Eleonore Street QB-87209 +2-481-512-2222?\n' +
  '<Arthur Paternos> San Antonio $+7-121-504-8974 TT-45121\n <Ray Charles> Stevenson Pk. !+7-681-512-2222! CB-47209,\n' +
  '<JP Gorce> +9-421-674-8974 New-Bern TP-16017\n <P McDon> Revolution Street +2-908-512-2222; PP-47209\n' +
  '<Elizabeth Corber> +8-421-674-8974 Via Papa Roma\n <C Saborn> Main Street, +15-098-512-2222, Boulder\n' +
  '<Colin Marshall> *+9-421-674-8974 Edinburgh UK\n <Bernard Povit> +3-498-512-2222; Hill Av.  Cameron\n' +
  '+12-099-500-8000 <Pete Highman> Ontario Bd.\n +8-931-512-4855 <W Mount> Oxford Street CQ-23071\n' +
  '<Donald Drinkaw> Moon Street, +3-098-512-2222, Peterville\n';

const num = '1-541-754-3010';

console.log(phone(dr, num));
console.log(phoneV2(dr, num));
