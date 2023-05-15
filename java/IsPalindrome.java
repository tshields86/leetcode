// https://leetcode.com/problems/valid-palindrome/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true

// Input: s = "race a car"
// Output: false

// Input: s = " "
// Output: true

class Solution {
  public boolean isPalindrome(String s) {
    int head = 0, tail = s.length() - 1;

    while (head <= tail) {
      char cHead = s.charAt(head);
      char cTail = s.charAt(tail);

      if (!Character.isLetterOrDigit(cHead)) {
        head++;
      } else if (!Character.isLetterOrDigit(cTail)) {
        tail--;
      } else if (Character.toLowerCase(cHead) != Character.toLowerCase(cTail)) {
        return false;
      } else {
        head++;
        tail--;
      }
    }

    return true;
  }
}
