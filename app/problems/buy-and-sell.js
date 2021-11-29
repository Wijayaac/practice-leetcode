/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /*
        profit: maximum total profit.
        buy: the day when buy stock.
        sell: the day when sell stock.
        days: maximum trade days.
    */
  let profit = 0;
  let buy = 0;
  let sell = 0;
  let days = prices.length;

  while (buy < days && sell < days) {
    while (buy < days - 1 && prices[buy + 1] < prices[buy]) buy++; // find the valley of prices

    sell = buy;

    while (sell < days - 1 && prices[sell + 1] > prices[sell]) sell++; // find the peak of prices

    profit += prices[sell] - prices[buy];

    buy = sell + 1;
  }
  return profit;
};
