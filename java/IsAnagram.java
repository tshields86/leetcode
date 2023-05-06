// https://leetcode.com/problems/valid-anagram/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

class Solution {
  public boolean isAnagram(String a, String b) {
    int aLength = a.length();
    int bLength = b.length();
    if (aLength != bLength) { return false; }

    Map<Character, Integer> charCount = new HashMap<>();

    for (int i = 0; i < aLength; i++) {
      char aChar = a.charAt(i);
      char bChar = b.charAt(i);
      charCount.put(aChar, charCount.getOrDefault(aChar, 0) + 1);
      charCount.put(bChar, charCount.getOrDefault(bChar, 0) - 1);
    }

    for (int count : charCount.values()) {
      if (count != 0) { return false; }
    }

    return true;
  }
}
