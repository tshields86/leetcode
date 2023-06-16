https://leetcode.com/problems/group-anagrams/

/*
Given an array of strings strs, group the anagrams together.You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const map = new Map();

  for (let str of strs) {
    const sortedStr = [...str].sort().join('');
    if (map.has(sortedStr)) map.get(sortedStr).push(str);
    else map.set(sortedStr, [str]);
  }

  return [...map.values()];
};
