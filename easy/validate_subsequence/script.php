<?php
# Find squence item set/include in array or not
$arr = [6, 5, 1, 22, 25, -1, 8, 10];
$seq = [1, 6, -1, 10];

function validateSubsequence($array, $sequence) {
  sort($array);
  sort($sequence);

  $arr_idx = 0;
  $seq_idx = 0;

  while ($arr_idx < count($array) && $seq_idx < count($sequence) ) {
    if ($array[$arr_idx] === $sequence[$seq_idx]) {
      $seq_idx += 1;
    }

    $arr_idx += 1;
  }

  return $seq_idx === count($sequence);
}

echo validateSubsequence($arr, $seq);
