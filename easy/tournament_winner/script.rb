# Find the winner team
# Rules: 
#   - winner will get 3
#   - lose get 0
#   - 0 for away team winner 
#   - 1 for home team winner
HOME_TEAM_WON=1
#O(n) time | O(k) space
def tournament_winner(competitions, results)
  current_best_team = ""
  scores = { current_best_team => 0 }

  competitions.each_with_index do |competition, index|
    result = results[index]
    home_team, away_team = competition

    winning_team = result == HOME_TEAM_WON ? home_team : away_team

    update_scores(winning_team, 3, scores)

    current_best_team = winning_team if scores[winning_team] > scores[current_best_team]
  end
  # puts scores

  return current_best_team
end

def update_scores(team, points, scores)
  if !scores[team]
    scores[team] = 0
  end

  scores[team] += points
end

puts tournament_winner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0,0,1])
