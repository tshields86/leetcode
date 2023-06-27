/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

Input: prices = [7, 1, 5, 3, 6, 4]
Output: 5

Input: prices = [7, 6, 4, 3, 1]
Output: 0

Brute force - Time: O(n ^ 2), Space: O(1)
Keep track of profit, minPrice, & current profit - Time O(n), Space O(1)
*/

const maxProfit = prices => {
  let profit = 0;
  let minPrice = Infinity;
  for (let price of prices) {
    if (price < minPrice) minPrice = price;
    else if (price - minPrice > profit) {
      profit = price - minPrice;
    }
  }
  return profit;
};
