/* https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ */

/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or - 1 if needle is not part of haystack.

Input: haystack = "sadbutsad", needle = "sad"
Output: 0

Input: haystack = "leetcode", needle = "leeto"
Output: -1
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    let isSame = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) isSame = false;
    }

    if (isSame) return i;
  }

  return -1;
};
