matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# O(w * h) time | O(w * h) space
def transpose_matrix(matrix):
    transposed_matrix = []

    for idx in range(len(matrix)):
        new_row = []

        for jdx in range(len(matrix)):
            # print(f"{idx}{jdx} {len(matrix)}")
            new_row.append(matrix[jdx][idx])

        transposed_matrix.append(new_row)

    return transposed_matrix

print(transpose_matrix(matrix))
