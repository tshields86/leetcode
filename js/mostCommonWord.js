/* https://leetcode.com/problems/most-common-word/ */

/* 
Given a paragraph and a list of banned words, return the most frequent word that
is not in the list of banned words.  It is guaranteed there is at least one word
that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.
Words in the paragraph are not case sensitive.  The answer is in lowercase.

Input:
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation:
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"),
and that "hit" isn't the answer even though it occurs more because it is banned.
*/

const isLetter = c => /\w/.test(c);

var mostCommonWord = function (paragraph, banned) {
  const bannedWords = new Set(banned);

  const wordCount = new Map();
  let maxCount = 0;
  let maxWord = '';

  const chars = [...paragraph];
  let wordBuffer = '';

  for (let i = 0; i < chars.length; i++) {
    if (isLetter(chars[i])) {
      wordBuffer += chars[i].toLowerCase();
      if (i < chars.length - 1) continue;
    }
    if (wordBuffer.length) {
      if (!bannedWords.has(wordBuffer)) {
        const count = (wordCount.get(wordBuffer) || 0) + 1;
        wordCount.set(wordBuffer, count);
        if (count > maxCount) {
          maxCount = count;
          maxWord = wordBuffer;
        }
      }
      wordBuffer = '';
    }
  }

  return maxWord;
};