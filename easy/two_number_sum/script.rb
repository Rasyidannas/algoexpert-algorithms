# Find 2 numbers equals with specific sum
# example [ 3, 5, -4, 8, 11, -1, 6 ] equal 10 => 11, -1
arr = [ 3, 5, -4, 8, 11, 1, -1, 6 ]
sum = 10

# This is using arithmetic O(n) time | O(n) space
def two_number_sum(array, targetSum)
  nums = {}
  
  array.each do |num|
    potentialMatch = targetSum - num
    
    if nums[potentialMatch]
      return [potentialMatch, num]
    else
      nums[num] = true
    end 
  end
  
  return []
end

puts two_number_sum(arr, sum)

# This isusing two pointer O(nlog(n)) time | O(1) space
def two_number_sum(array, targetSum)
  array.sort!
  left = 0
  right = array.length - 1

  while left < right do
    currentSum = array[left] + array[right]

    if(currentSum === targetSum)
      return [array[left], array[right]]  
    elsif
      left += 1
    else
      rigth -= 1
    end
  end

  return []
end

puts two_number_sum(arr, sum)
