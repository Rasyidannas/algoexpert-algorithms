HOME_TEAM_WON = 1

def tournament_winner(competitions, results):
    current_best_team = ""
    scores = { current_best_team: 0 }

    for idx, competition in enumerate(competitions):
        result = results[idx]
        home_team, away_team = competition

        winning_team = home_team if result == HOME_TEAM_WON else away_team

        update_scores(winning_team, 3, scores)

        if scores[winning_team] > scores[current_best_team]:
            current_best_team = winning_team
            
    # print(scores)

    return current_best_team

def update_scores(team, points, scores):
    if team not in scores:
        scores[team] = 0

    scores[team] += points

print(tournament_winner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0,0,1]))
