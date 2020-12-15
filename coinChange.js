/* https://leetcode.com/problems/coin-change/ */

/* 
You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Input: coins = [2], amount = 3
Output: -1

Input: coins = [1], amount = 0
Output: 0

Input: coins = [1], amount = 1
Output: 1

Input: coins = [1], amount = 2
Output: 2
*/

/* 
Dynamic programming - Bottom up

Time: O(A * C)
Space: O(A)
*/

const coinChange = (coins, amount) => {
  coins.sort((a, b) => a - b);

  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      } else break;
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};