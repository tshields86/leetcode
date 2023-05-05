/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */

const maxProfit = prices => {
  let profit = 0;
  let minPrice = Infinity;

  for (let price of prices) {
    if (price <= minPrice) minPrice = price;
    let curProfit = price - minPrice
    profit = Math.max(curProfit, profit);
  }

  return profit;
};