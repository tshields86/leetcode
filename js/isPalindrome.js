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

  let [left, right] = [0, s.length - 1];
  let lChar, rChar;

  while (left < right) {
    lChar = s[left];
    rChar = s[right];

    if (/[^a-z0-9]/gi.test(lChar)) left++;
    else if (/[^a-z0-9]/gi.test(rChar)) right--;
    else if (lChar.toLowerCase() !== rChar.toLowerCase()) return false;
    else {
      left++;
      right--;
    }
  }

  return true;
};
