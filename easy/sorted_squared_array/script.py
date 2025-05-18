# Squre all items in array and then sort
arr=[1,2,3,-8,-1]
# this is using brute force O(nlogn) time | O(n) space
def sorted_squared_array(array):
  sorted_squares = [0 for _ in array]

  for idx in range(len(array)): 
    value = array[idx]
    sorted_squares[idx] = value * value

  sorted_squares.sort()
  return sorted_squares

print(sorted_squared_array(arr))

# this is using two pointer O(n) time | O(n) space
def sorted_squared_array2(array):
    array.sort()
    sorted_squares = [0 for _ in array]  # Initialize result array
    smaller_value_idx = 0
    larger_value_idx = len(array) - 1

    for idx in reversed(range(len(array))):
        smaller_value = array[smaller_value_idx]
        larger_value = array[larger_value_idx]

        if abs(smaller_value) > abs(larger_value):
            sorted_squares[idx] = smaller_value * smaller_value
            smaller_value_idx += 1
        else:
            sorted_squares[idx] = larger_value * larger_value
            larger_value_idx -= 1

    return sorted_squares

print(sorted_squared_array2(arr))
