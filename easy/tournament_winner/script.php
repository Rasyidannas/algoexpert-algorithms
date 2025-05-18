<?php
// Find the winner team
// Rules: 
//  - winner will get 3
//  - lose get 0
//  - 0 for away team winner
//  - 1 for home team winner

$HOME_TEAM_WON = 1;

function tournamentWinner($competitions, $results) {
  global $HOME_TEAM_WON;
  $currentBestTeam = "";
  $scores = [ $currentBestTeam => 0 ];

  foreach ($competitions as $idx => $competition) {
    $result = $results[$idx];
    [$homeTeam, $awayTeam] = $competition;

    $winningTeam = $result === $HOME_TEAM_WON ? $homeTeam : $awayTeam; 

    updateScores($winningTeam, 3, $scores); // ✅ Passing by reference

    if ($scores[$winningTeam] > $scores[$currentBestTeam]) {
      $currentBestTeam = $winningTeam;
    }
  } 
  
  return $currentBestTeam;
}

function updateScores($team, $points, &$scores) { // ✅ Pass by reference
  if (!isset($scores[$team])) {
    $scores[$team] = 0;
  } 
  
  $scores[$team] += $points;
}

echo tournamentWinner(
  [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]],
  [0, 0, 1]
);
