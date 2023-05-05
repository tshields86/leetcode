/* https://leetcode.com/problems/decode-ways/ */

/* 
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.

Input: s = "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

Input: s = "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Input: s = "0"
Output: 0
Explanation: There is no character that is mapped to a number starting with '0'.
We cannot ignore a zero when we face it while decoding.
So, each '0' should be part of "10" --> 'J' or "20" --> 'T'.

Input: s = "1"
Output: 1

"226"
 ^
*/

/* 
Recursive Approach with Memoization
Time: O(n)
Space: O(n)
*/

const numDecodingsRecursiveWithMemo = (s, i, memo = new Map()) => {
  const len = s.length;

  if (i === len) return 1;
  if (s.charAt(i) === '0') return 0;
  if (i === len - 1) return 1;
  if (memo.has(i)) return memo.get(i);

  let result = numDecodingsRecursiveWithMemo(s, i + 1, memo);
  if (parseInt(s.substring(i, i + 2)) <= 26) {
    result += numDecodingsRecursiveWithMemo(s, i + 2, memo);
  }
  memo.set(i, result);

  return result;
};

const numDecodingsRecursive = s => {
  if (s === null || s.length === 0) return 0;

  return recursiveWithMemo(s, 0);
};

/*
Iterative Approach
Time: O(n)
Space: O(n)
*/

const numDecodingsIterative = s => {
  if (s === null || s.length === 0) return 0;

  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s.charAt(0) === '0' ? 0 : 1;

  for (let i = 2; i < dp.length; i++) {
    if (s.charAt(i - 1) !== '0') {
      dp[i] += dp[i - 1];
    }

    const twoDigits = parseInt(s.substring(i - 2, i));
    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
};
