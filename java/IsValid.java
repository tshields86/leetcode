// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

class Solution {
  public boolean isValid(String s) {
    Map<Character, Character> parenLookup = new HashMap<>(3);
    parenLookup.put(')', '(');
    parenLookup.put('}', '{');
    parenLookup.put(']', '[');

    Stack<Character> parenStack = new Stack<>();

    for (int i = 0; i < s.length(); i++) {
      char paren = s.charAt(i);

      if (parenLookup.containsKey(paren)) {
          if (!parenStack.isEmpty() && parenLookup.get(paren).equals(parenStack.peek())) {
            parenStack.pop();
          } else {
            return false;
        }
      } else {
          parenStack.push(paren);
      }
    }

    if (parenStack.size() == 0) return true;
    return false;
  }
}
