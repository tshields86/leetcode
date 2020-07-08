/* https://leetcode.com/problems/climbing-stairs/ */

const climbStairsRecursive = (n, cache = []) => {
  if (cache[n]) return cache[n];
  if (n === 0) return 1;
  if (n < 0) return 0;

  cache[n] = climbStairsRecursive(n - 1, cache) + climbStairsRecursive(n - 2, cache);

  return cache[n];
};

const climbStairs = n => {
  let prev = 1;
  let cur = 1;
  for (let i = 1; i < n; i ++) {
    let temp = cur;
    cur = cur + prev;
    prev = temp;
  }
  return cur;
};