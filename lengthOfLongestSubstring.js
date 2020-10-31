/* https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

/*
Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Input: s = ""
Output: 0
*/

const lengthOfLongestSubstring = s => {
  const map = new Map();
  let longest = 0;

  for (let i = 0, start = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) start = Math.max(start, map.get(char));

    longest = Math.max(longest, i - start + 1);

    map.set(char, i + 1);
  }

  return longest;
};