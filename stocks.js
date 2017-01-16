
function maxProfit(stocks){
  var maxDiff = 0;
  for(var i = 0; i < stocks.length; i++){
    var currentStock = stocks[i];
    var nextStock;
    var profit;

    for(var x = i; x < stocks.length; x++){
      nextStock = stocks[x + 1];
      if(x + 1 < stocks.length){
        profit = nextStock - currentStock;
        if(profit > maxDiff){
          maxDiff = profit;
        }
      }
    }
  }

  return console.log('Maximum Profit: $' + maxDiff)
}

maxProfit([45, 24, 35, 31, 40, 38, 11])