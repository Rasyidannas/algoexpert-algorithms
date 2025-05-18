// Find the winner team
// Rules: 
//  - winner will get 3
//  - lose get 0
//  - 0 for away team winner
//  - 1 for home team winner

const HOME_TEAM_WON = 1

function tournamentWinner(competitions, results) {
  let currentBestTeam = ""
  const scores = { currentBestTeam: 0 }

  competitions.forEach((competition, idx) => {
    const result = results[idx]
    const [homeTeam, awayTeam] = competition
    
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam

    updateScores(winningTeam, 3, scores)
    
    if (scores[winningTeam] > scores['currentBestTeam']) {
      currentBestTeam = winningTeam
    }
  });
  // console.log(scores)
  
  return currentBestTeam
}

function updateScores(team, points, scores) {
  if(!scores[team]) {
    scores[team] = 0
  }

  scores[team] += points
}

console.log(tournamentWinner(
  [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]],
  [0, 0, 1]
))
