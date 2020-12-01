/* https://leetcode.com/problems/verifying-an-alien-dictionary/ */

/* 
In an alien language, surprisingly they also use english lowercase letters,
but possibly in a different order. The order of the alphabet is some
permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of
the alphabet, return true if and only if the given words are sorted
lexicographicaly in this alien language.

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character
*/

const greaterThan = (w1, w2, valueMap) => {
  for (let i = 0; i < Math.min(w1.length, w2.length); i++) {
    if (w1[i] !== w2[i]) {
      if (valueMap.get(w1[i]) > valueMap.get(w2[i])) return true;
      else return false;
    }
  }

  if (w1.length > w2.length) return true;

  return false;
};

const isAlienSorted = (words, order) => {
  const alphabetValues = new Map();
  for (let i = 0; i < order.length; i++) {
    alphabetValues.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    if (greaterThan(w1, w2, alphabetValues)) return false;
  }

  return true;
};
