# Find squence item set/include in array or not
arr = [6, 5, 1, 22, 25, -1, 8, 10]
seq = [1, 6, -1, 10]

def validate_subsequence(array, sequence):
    array = sorted(array)
    sequence = sorted(sequence)

    arr_idx = 0
    seq_idx = 0

    while arr_idx < len(array) and seq_idx < len(sequence):
        if array[arr_idx] == sequence[seq_idx]:
            seq_idx += 1
        arr_idx += 1

    return seq_idx == len(sequence)

print(validate_subsequence(arr, seq))  # Output: True
