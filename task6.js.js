const prices = [7,6,4,3,1];

var maxProfit = function(prices) {
    const bound = prices.length;
    let indexOfMin = 0;
    let indexOfMax;
    for (let i = 0; i < bound; i++) {
        if (prices[i] < prices[indexOfMin]) {
            indexOfMin = i;
        }
    }
    indexOfMax = indexOfMin;
    for (let j = indexOfMin; j < bound; j++) {
        if (prices[j] > prices[indexOfMax]) {
            indexOfMax = j;
        }
    }
    return prices[indexOfMax] - prices[indexOfMin];
};

maxProfit(prices);