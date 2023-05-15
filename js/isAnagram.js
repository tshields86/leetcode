/* https://leetcode.com/problems/valid-anagram/ */

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const chars = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    chars.set(sChar, (chars.get(sChar) || 0) + 1);
    chars.set(tChar, (chars.get(tChar) || 0) - 1);
  }

  for (let [char, count] of chars) {
    if (count !== 0) return false;
  }

  return true;
};
