arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
sum = 10
// Time Complexity is O(2n)
function threeSum(arr, sum) {
  const obj = {};
  
  for (let i = 0; i < arr.length - 1; i++) {
    currentTwoSum = arr[i] + arr[i+1];
    x = sum - currentTwoSum;

    // this will store currentTwoSum under sum
    if (currentTwoSum < sum ) obj[x]=[arr[i], arr[i+1]]; 
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) return `${arr[i]},${obj[arr[i]]}`;
  }

  return "Pair no found"
}

console.log(threeSum(arr, sum));
// Other testing with random arr 
arr2=[1, 2, 3, 4, 5, 6];
console.log(threeSum(arr2, sum));
