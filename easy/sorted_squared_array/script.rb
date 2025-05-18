# Square all items in array and then sort
arr = [1,2,3,-8,-1]

# this is using brute force O(nlogn) time | O(n) space
def sorted_squared_array(array)
  sorted_squares = []

  for i in array
    sorted_squares.append(i * i)
  end

  return sorted_squares.sort!
end

puts sorted_squared_array(arr)

# this is using two pointer O(n) time | O(n) space
def sorted_squared_array2(array)
  array.sort!
  sorted_squares = []

  smaller_value_idx = 0
  larger_value_idx = array.length - 1

  (array.length).times do |idx|
    smaller_value = array[smaller_value_idx]
    larger_value = array[larger_value_idx]

    if smaller_value.abs > larger_value.abs
      sorted_squares[idx] = smaller_value * smaller_value

      smaller_value_idx += 1
    else
      sorted_squares[idx] = larger_value * larger_value

      larger_value_idx -= 1
    end
  end
  
  return sorted_squares
end

puts sorted_squared_array2(arr)
