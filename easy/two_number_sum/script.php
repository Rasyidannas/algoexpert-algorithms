<?php
/* Find 2 numbers that equal a specific sum */
/* Example: [ 3, 5, -4, 8, 11, -1, 6 ] equal 10 => 11, -1 */
$arr = [3, 5, -4, 8, 11, 1, -1, 6];
$sum = 10;

// This is using arithmetic O(n) time | O(n) space 
function twoNumberSum($array, $targetSum) {
    $nums = [];

    foreach ($array as $num) {
        $potentialMatch = $targetSum - $num;

        if (isset($nums[$potentialMatch])) {
            return [$potentialMatch, $num];
        } else {
            $nums[$num] = true;
        }
    }

    return [];
}

print_r(twoNumberSum($arr, $sum));

// This is using two pointer O(nlog(n)) | O(1) space
function twoNumberSum2($array, $targetSum) {
  sort($array);
  $left = 0;
  $right = count($array) - 1;

  while($left < $right) {
    $currentSum = $array[$left] + $array[$right];

    if ($currentSum === $targetSum) {
      return [$array[$left], $array[$right]];
    } elseif ($currentSum < $targetSum) {
      $left++;
    } else {
      $right--;
    }
  }

  return [];
}

print_r(twoNumberSum2($arr, $sum));
?>

