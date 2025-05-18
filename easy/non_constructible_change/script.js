// The idea is to sort the coins and iteratively track the smallest changeable amount.
// Rules:
//   - coins > currentChange + 1, it will stop

// O(nlogn) time | O(1) space

const nonConstructibleChange = function(coins) {
  const sortedCoins = coins.sort((a, b) => a - b)
  
  let currentChangeCreated = 0

  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1

    currentChangeCreated += coin
  }

  return currentChangeCreated + 1
}

array=[1, 2, 7, 1, 5, 3, 22]
console.log(nonConstructibleChange(array));

