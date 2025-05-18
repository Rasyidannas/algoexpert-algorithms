<?php
// Square all items in array and then sort
$arr = [1,2,3,-8,-1];

// This is using brute force O(nlogn) time | O(n) space
function sortedSquareArray($array) {
  $sortedSquares = [];

  foreach ($array as $key => $value) {
    array_push($sortedSquares, $value * $value);
  }

  sort($sortedSquares);

  return $sortedSquares;
}

print_r(sortedSquareArray($arr));

// This is using two pointer O(nlog(n)) | O(1) space
function  sortedSquareArray2($array) {
  sort($array);
  $sorted_squares = [];
  
  $smaller_value_idx = 0;
  $larger_value_idx = count($array) - 1;

  foreach ($array as $idx => $value) {
    $smaller_value = $array[$smaller_value_idx];
    $larger_value = $array[$larger_value_idx];

    if (abs($smaller_value) > abs($larger_value)) {
      $sorted_squares[$idx] = $smaller_value * $smaller_value;

      $smaller_value_idx += 1;
    } else {
      $sorted_squares[$idx] = $larger_value * $larger_value;

      $larger_value_idx -= 1;
    }
  }

  return $sorted_squares;
}

print_r(sortedSquareArray2($arr));
