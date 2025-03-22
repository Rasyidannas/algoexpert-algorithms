# Find squence item set/include in array or not
arr=[6, 5, 1, 22, 25, -1, 8, 10]
seq=[1, 6, -1, 10]
# O(n) time | O(1) space
def validate_subsequence(array, sequence)
  array.sort!
  sequence.sort!

  arr_idx = 0
  seq_idx = 0

  while arr_idx < array.length && seq_idx < array.length do
    if array[arr_idx] == sequence[seq_idx]
      seq_idx += 1
    end
    
    arr_idx += 1
  end

  return seq_idx == sequence.length
end

puts validate_subsequence(arr, seq)
