/** 
 * You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:

the crossword must contain exactly four words;
these four words should form four pairwise intersections;
all words must be written either left-to-right or top-to-bottom;
the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.
Given 4 words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.

Example

For `words = ["crossword", "square", "formation", "something"]`, the output should be
`solution(words) = 6`.

Note: I want to disclose I could not solve this one by myself and IMO the nature of this question is quite silly. Nevertheless, it is a question and after 6 hours of trying this myself, I finally searched for other solutions out there and filled in the missing pieces, namely the addition of variables a2 and d2. This things loops so many times it physically could not fit in my terminal. In summary, I don't think I'd be able to solve a problem like this again . 

*/

const Crossword = function (words: string[]): number {
  let numOfFormations = 0;

  for (let i = 0; i < 4; i++) {
    for (let word1 = 0; word1 < words[i].length - 1; word1++) {
      for (let j = 0; j < 4; j++) {
        if (j === i) continue;

        for (let word2 = 1; word2 < words[j].length; word2++) {
          if (words[i][word1] !== words[j][word2]) continue;

          for (let b1 = 0; b1 < word2 - 1; b1++) {
            for (let k = 0; k < 4; k++) {
              if (k === i || k === j) continue;

              if (word2 - b1 >= words[6 - i - j - k].length) continue;

              for (let c1 = 0; c1 < words[k].length - 1; c1++) {
                if (words[k][c1] !== words[j][b1]) continue;

                for (let c2 = c1 + 2; c2 < words[k].length; c2++) {
                  const a2 = word1 + (c2 - c1);
                  console.log(a2);

                  if (a2 >= words[i].length) continue;
                  for (let d1 = 0; d1 < words[6 - i - j - k].length; d1++) {
                    if (words[6 - i - j - k][d1] !== words[k][c2]) continue;
                    const d2 = d1 + (word2 - b1);
                    console.log(d2);
                    if (d2 >= words[6 - i - j - k].length) break;
                    if (words[i][a2] !== words[6 - i - j - k][d2]) continue;
                    numOfFormations++;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return numOfFormations;
};

console.log(Crossword(['crossword', 'square', 'formation', 'something']));
