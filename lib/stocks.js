var maxDiff = 0;
function maxProfit(stocks){
  for(var i = 0; i < stocks.length; i++){
    var currentStock = stocks[i];
    var nextStock;
    var profit;
    for(var x = i; x < stocks.length; x++){
      console.log(x + 1, i)
      nextStock = stocks[x + 1]

      if(x + 1 < stocks.length){
        console.log(stocks[x + 1])

        profit = nextStock - currentStock
        console.log('profit: ',profit)
        if(profit > maxDiff){
          maxDiff = profit
        }
      }else {

      }
      //console.log('profit: ', profit)
    }

    console.log('_____')
    profit = nextStock - currentStock
     //console.log(profit)
  }

  return console.log('maxdiff: ',maxDiff)
}


maxProfit([45, 24, 35, 31, 40, 38, 11])