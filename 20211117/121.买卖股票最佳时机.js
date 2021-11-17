var maxProfit = function(prices) {
    let maxprofit = 0;
    let minprice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        minprice = Math.min(minprice,prices[i]);
        maxprofit = Math.max(maxprofit,prices[i] - minprice);
    }
    return maxprofit;
};

console.log(maxProfit([7,1,5,3,6,4]))