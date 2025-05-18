// Square all items in array and then sort
arr = [1,2,3,-8,-1]

// this is using brute force O(nlogn) time | O(n) space
function sortedSquaredArray(array) {
  const sortedSquares = [];

  array.forEach(value => {
    sortedSquares.push(value * value)
  });

  sortedSquares.sort((a, b) => a - b)
  return sortedSquares
}

console.log(sortedSquaredArray(arr))

// this is using two pointer O(n) time | O(n) space
function sortedSquaredArray2(array) {
  array.sort((a, b) => a - b)
  sortedSquares = []

  smallerValueIdx = 0;
  largerValueIdx = array.length - 1

  array.forEach((element, idx) => {
    smallerValue = array[smallerValueIdx]
    largerValue = array[largerValueIdx]

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares.push(smallerValue * smallerValue)

      smallerValueIdx += 1   
    } else {
      sortedSquares.push(largerValue * largerValue)

      largerValueIdx -= 1
    }
  })

  return sortedSquares
}

console.log(sortedSquaredArray2(arr))
