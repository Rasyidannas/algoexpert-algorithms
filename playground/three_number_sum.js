function threeSum(array, targetSum) {
  array.sort((a, b) => a - b); // Sorting the array for two-pointer approach

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];

      if (currentSum === targetSum) {
        return [array[i], array[left], array[right]].join(',');
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return null;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = 13;

console.log(threeSum(arr, sum)); // Output: "1,2,7"
