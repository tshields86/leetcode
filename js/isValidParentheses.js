/* https://leetcode.com/problems/valid-parentheses/ */

/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

Input: s = "([)]"
Output: false

Input: s = "{[]}"
Output: true
*/

const PARENS_PAIRS = new Map([
  ['(', ')'],
  ['{', '}'],
  ['[', ']']
]);

const isValid = s => {
  const stack = [];

  for (const char of s) {
    if (PARENS_PAIRS.has(char)) {
      stack.push(char);
    } else {
      const pair = stack.pop();
      if (PARENS_PAIRS.get(pair) !== char) return false;
    }
  }

  return stack.length === 0;
};