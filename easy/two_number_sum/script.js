//Find 2 numbers equals with specific sum
//example [ 3, 5, -4, 8, 11, -1, 6 ] equal 10 => 11, -1
arr = [ 3, 5, -4, 8, 11, 1, -1, 6 ]
sum = 10

// This is using arithmetic O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  const nums = {};
  
  for(const num of array) {
    const potentialMatch = targetSum - num;

    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true
    }
  }

  return []
}

//console.log(twoNumberSum(arr, sum))

// this is using two pointers O(nlog(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a,b) => a - b);
  let left = 0;
  let rigth = array.length - 1;

  while(left < right) {
    const currentSum = array[left] + array[right]

    if(currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if ( currentSum > targetSum ) {
      right--;
    }
  }

  return [];
}

//console.log(twoNumberSum(arr, sum))
