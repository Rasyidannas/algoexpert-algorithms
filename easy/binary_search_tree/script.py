class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Find Closest Value in Binary Search Tree
# Time Complexity: O(log(n)) | Space Complexity O(n)
# def findClosestValueInBst(tree, target):
#     return findClosestValueInBstHelper(tree, target, float("inf"))
#
# def findClosestValueInBstHelper(tree, target, closest):
#     if tree is None:
#         return closest
#
#     if abs(target - closest) > abs(target - tree.value):
#         closest = tree.value
#
#     if target < tree.value:
#         return findClosestValueInBstHelper(tree.left, target, closest)
#     elif target > tree.value:
#         return findClosestValueInBstHelper(tree, target, closest)
#     else:
#         return closest
#

# Other way using while loop
# Time Complexity: O(log(n)) | Space Complexity O(1)
def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, float("inf"))

def findClosestValueInBstHelper(tree, target, closest):
    currentNode = tree
    while currentNode is not None:
        if abs(target - closest) > abs(target - currentNode.value):
            closest = currentNode.value
        if target < currentNode.value:
            currentNode = currentNode.left
        elif target > currentNode.value:
            currentNode = currentNode.right
        else:
            break
    return closest

root = BST(10)
root.left = BST(5)
root.right = BST(15)
root.left.left = BST(2)
root.left.right = BST(7)
root.right.right = BST(20)

print(findClosestValueInBst(root, 9))
