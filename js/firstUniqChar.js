/* https://leetcode.com/problems/first-unique-character-in-a-string/ */

/*
Given a string s, find the first non - repeating character in it and return its index.If it does not exist, return -1.

Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1
*/

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  const charCounts = new Map();
  for (let char of s) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (charCounts.get(s[i]) === 1) return i;
  }

  return -1;
};
