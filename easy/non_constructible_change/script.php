<?php
// The idea is to sort the coins and iteratively track the smallest changeable amount.
// Rules:
//   - coins > currentChange + 1, it will stop

// O(nlogn) time | O(1) space

function nonConstuctibleChange($coins) {
  sort($coins);

  $currentChangeCreated = 0;

  foreach ($coins as $key => $value) {
    if($value > $currentChangeCreated + 1) {
      return $currentChangeCreated + 1;
    }

    $currentChangeCreated += $value;
  }

  return $currentChangeCreated + 1;
}

$array=[1, 2, 7, 1, 5, 3, 22];
print_r(nonConstuctibleChange($array));
