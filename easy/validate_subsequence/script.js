// Find squence item set/include in array or not
const arr = [6, 5, 1, 22, 25, -1, 8, 10]
const seq = [1, 6, -1, 10]

function validateSubsequence(array, sequence) {
  array.sort((a, b) => a - b)
  sequence.sort((a, b) => a - b)

  let arr_idx = 0
  let seq_idx = 0

  while (arr_idx < array.length && seq_idx < sequence.length) {
    if (array[arr_idx] === sequence[seq_idx]) {
      seq_idx += 1
    }
    arr_idx += 1
  }

  return seq_idx === sequence.length
}

console.log(validateSubsequence(arr, seq))
