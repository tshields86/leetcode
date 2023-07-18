/* https://leetcode.com/problems/generate-parentheses/ */

/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Input: n = 1
Output: ["()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  const result = [];
  const dfs = (str, open, close) => {
    if (open > close) {
      return;
    }
    if (open === 0 && close === 0) {
      result.push(str);
      return;
    }
    if (open > 0) {
      dfs(`${str}(`, open - 1, close);
    }
    if (close > 0) {
      dfs(`${str})`, open, close - 1);
    }
  };
  dfs('', n, n);
  return result;
};
