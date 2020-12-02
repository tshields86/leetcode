/* https://leetcode.com/problems/top-k-frequent-words/ */

/* 
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest.
If two words have the same frequency, then the word with the lower
alphabetical order comes first.

Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.

Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
with the number of occurrence being 4, 3, 2 and 1 respectively.
*/

const topKFrequent = (words, k) => {
  const occurances = new Map();

  words.forEach(word => {
    occurances.set(word, (occurances.get(word) || 0) + 1);
  });

  return [...occurances.keys()]
    .sort((a, b) => {
      const diff = occurances.get(b) - occurances.get(a);
      if (diff === 0) return a.localeCompare(b);
      return diff;
    })
    .slice(0, k);
};