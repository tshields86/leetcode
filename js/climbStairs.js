/* https://leetcode.com/problems/climbing-stairs/ */

/* 
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/* 
Recursive solution
Time: O(2^n) - Size of recursion tree will be 2^n
Space: O(n) - The depth of the recursion tree can go upto n

Recursion with Memoization
Time: O(n)
Space: O(n)
*/

const climbStairsRecursive = (n, cache = []) => {
  if (cache[n]) return cache[n];
  if (n === 0) return 1;
  if (n < 0) return 0;

  cache[n] = climbStairsRecursive(n - 1, cache) + climbStairsRecursive(n - 2, cache);

  return cache[n];
};

/* 
Bottom up approach
Time: O(n)
Space: O(1)
*/

const climbStairs = n => {
  let prev = 1;
  let cur = 1;
  for (let i = 1; i < n; i ++) {
    const temp = cur;
    cur = cur + prev;
    prev = temp;
  }
  return cur;
};
