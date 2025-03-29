# The idea is to sort the coins and iteratively track the smallest changeable amount.
# Rules:
#   - coins > currentChange + 1, it will stop

# O(nlogn) time | O(1) space
def non_constructible_change(coins)
  coins.sort!

  current_change_created = 0

  coins.each do |coin|
    return current_change_created + 1 if coin > current_change_created + 1

    current_change_created += coin
  end

  return current_change_created + 1
end

array=[1, 2, 7, 1, 5, 3, 22]
puts non_constructible_change(array)
