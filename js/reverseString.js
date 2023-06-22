/* https://leetcode.com/problems/reverse-string/ */

/*
Write a function that reverses a string.The input string is given as an array of characters s.

You must do this by modifying the input array in -place with O(1) extra memory.

Input: s = ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]

Input: s = ["H", "a", "n", "n", "a", "h"]
Output: ["h", "a", "n", "n", "a", "H"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {
  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    const temp = s[l];
    s[l] = s[r];
    s[r] = temp;
  }
};
