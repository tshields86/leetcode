/* https://leetcode.com/problems/valid-palindrome/ */

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Input: s = "A man, a plan, a canal: Panama"
Output: true

Input: s = "race a car"
Output: false

Input: s = " "
Output: true
*/

const isPalindrome = s => {
  if (s.length <= 1) return true;

  let [l, r] = [0, s.length - 1];

  while (l < r) {
    const lChar = s[l];
    const rChar = s[r];

    if (/[^a-z0-9]/gi.test(lChar)) l++;
    else if (/[^a-z0-9]/gi.test(rChar)) r--;
    else if (lChar.toLowerCase() !== rChar.toLowerCase()) return false;
    else {
      l++;
      r--;
    }
  }

  return true;
};
