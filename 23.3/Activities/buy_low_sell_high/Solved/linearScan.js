'use strict';

var prices = [1.90, 1.42, 1.32, 1.45, 1.20, 1.34, 1.74, 1.10, 1.89, 1.42];

function findBestSale (array) {
  if (array.length < 2)
    throw Error ("Can't buy/sell in one minute.");

  var max_profit = array[1] - array[0],
    lowest_price = array[0];

  for (var i = 1; i < array.length; i += 1) {
    if (array[i] - lowest_price > max_profit) {
      max_profit = array[i] - lowest_price;
    }
    else if (array[i] < lowest_price) {
      lowest_price = array[i];
    }
  }

  return max_profit;
}

console.log(findBestSale(prices));