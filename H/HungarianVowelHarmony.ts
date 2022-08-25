/**
 * DESCRIPTION:
Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

Task:
Your goal is to create a function instrumental() which returns the valid form of a valid Hungarian word w in instrumental case i. e. append the correct suffix -vel or -val to the word w based on vowel harmony rules.

Vowel Harmony Rules (simplified)
Front vowels: e, é, i, í, ö, ő, ü, ű

Back vowels: a, á, o, ó, u, ú

Vowel pairs (short -> long): a -> á, e -> é, i -> í, o -> ó, u -> ú, ö -> ő, ü -> ű

Digraphs: sz, zs, cs

Word ends with a vowel
Change the ending vowel from short to long form.
Append the suffix:
vel if the ending vowel is a front vowel
val if the ending vowel is a back vowel
Word ends with a consonant
Step one
Default case: Double the ending consonant and continue with step two.
Special case: If the word ends with a digraph then double the first letter (e. g. sz -> ssz)
Step two
Append the suffix:

el if the last vowel is a front vowel
al if the last vowel is a back vowel

Examples:
```
instrumental("fa") === "fával"
instrumental("teve") === "tevével"
instrumental("betű") === "betűvel"
instrumental("ablak") === "ablakkal"
instrumental("szék") === "székkel"
instrumental("otthon") === "otthonnal"
instrumental("kar") === "karral"
instrumental("rács") === "ráccsal"
instrumental("kosz") === "kosszal"
Preconditions:
All strings are unicode strings.
The tests don't contain:
exceptional cases like kávé -> kávéval
words ending with doubled consonants (e. g. tett)
words ending with y
words ending with u, i
```
 */

export function instrumental(word: string): string {
  let result: string = '';
  const frontVowels = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
  const backVowels = ['a', 'á', 'o', 'ó', 'u', 'ú'];
  const vowels = [...frontVowels, ...backVowels];
  const vowMap: { [key: string]: string } = {
    a: 'á',
    e: 'é',
    i: 'í',
    o: 'ó',
    u: 'ú',
    ö: 'ő',
    ü: 'ű'
  };
  const Digraphs = ['sz', 'zs', 'cs'];

  const endsInVowel = (chars: string): boolean =>
    vowels.includes(chars.slice(-1));
  const testLastVowel = (chars: string): boolean =>
    frontVowels.includes(
      chars
        .split('')
        .filter((char) => vowels.includes(char))
        .slice(-1)[0]
    );
  const endsInDigraph = (chars: string): boolean =>
    Digraphs.includes(chars.slice(-2));

  if (endsInVowel(word)) {
    if (word.slice(-1) in vowMap) {
      result = `${word.slice(0, -1)}${vowMap[word.slice(-1)]}`;
    } else {
      result = word;
    }

    if (testLastVowel(word)) {
      result += 'vel';
    } else {
      result += 'val';
    }
  } else {
    if (endsInDigraph(word)) {
      result += word.slice(0, -1) + word.slice(-2);
    } else {
      result += word + word.slice(-1);
    }

    if (testLastVowel(word)) {
      result += 'el';
    } else {
      result += 'al';
    }
  }
  return result;
}

console.log(instrumental('fa'));

export function instrumentalV2(word: string): string {
  if (word === '') {
    return word;
  }

  const isFrontVowel = (str: string): boolean => {
    return 'eéiíöőüű'.includes(str);
  };

  const isBackVowel = (str: string): boolean => {
    return 'aáoóuú'.includes(str);
  };

  const mapLongVowel = (char: string): string => {
    switch (char) {
      case 'a':
        return 'á';
      case 'e':
        return 'é';
      case 'i':
        return 'í';
      case 'o':
        return 'ó';
      case 'u':
        return 'ú';
      case 'ö':
        return 'ő';
      case 'ü':
        return 'ű';
      default:
        break;
    }
    return char;
  };

  function doStepOne(str: string): string {
    if (str.length < 2) {
      return str;
    }

    const digraphs = ['sz', 'zs', 'cs'];
    for (const d of digraphs) {
      if (str.endsWith(d)) {
        return str.slice(0, str.length - 1) + d;
      }
    }

    return str + str.slice(-1);
  }

  function doStepTwo(word: string): string {
    for (let i = word.length - 1; i >= 0; i--) {
      if (isFrontVowel(word[i])) {
        return word + 'el';
      }
      if (isBackVowel(word[i])) {
        return word + 'al';
      }
    }

    return word;
  }

  const lastChar: string = word.slice(-1);
  const lastIsFront: boolean = isFrontVowel(lastChar);
  const lastIsBack: boolean = isBackVowel(lastChar);

  if (lastIsFront) {
    word = word.slice(0, word.length - 1) + mapLongVowel(lastChar) + 'vel';
  } else if (lastIsBack) {
    word = word.slice(0, word.length - 1) + mapLongVowel(lastChar) + 'val';
  } else {
    word = doStepOne(word);
    word = doStepTwo(word);
  }

  return word;
}
