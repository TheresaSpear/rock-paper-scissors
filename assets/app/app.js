//Dictionary
let gameChoices = {
  rock: 'https://www.sciencenewsforstudents.org/sites/default/files/scald-image/860_main_magnesite.png',
  paper: 'https://d1alt1wkdk73qo.cloudfront.net/images/guide/1a8a8c069c83401c84ce7ff5c77a7e69/640x960.jpg',
  scissors: 'https://www.simplemost.com/wp-content/uploads/2017/10/scissors-750x500.jpeg'
}

let computerChoice = ''

//Play the game
function play(choice) {
  let playerChoice = choice
  //Determine computer generated choice
  let choices = Object.keys(gameChoices)
  let choiceIndex = Math.floor(Math.random() * choices.length)
  computerChoice = choices[choiceIndex]

  //Determine winner
  if (playerChoice == 'rock') {
    if (computerChoice == 'paper') {
      displayWinner('computer')
    } else if (computerChoice == 'scissors') {
      displayWinner('user')
    } else {
      displayWinner('stall')
    }
  } else if (playerChoice == 'paper') {
    if (computerChoice == 'rock') {
      displayWinner('user')
    } else if (computerChoice == 'scissors') {
      displayWinner('computer')
    } else {
      displayWinner('stall')
    }
  } else if (playerChoice == 'scissors') {
    if (computerChoice == 'rock') {
      displayWinner('computer')
    } else if (computerChoice == 'paper') {
      displayWinner('user')
    } else {
      displayWinner('stall')
    }
  }
}

//Display winner to screen
function displayWinner(winner) {
  let displayResult = ''
  if (winner == 'user') {
    displayResult = 'WIN'
  } else if (winner == 'computer') {
    displayResult = 'LOSE'
  } else {
    displayResult = 'DRAW'
  }
  document.getElementById('gameResult').innerHTML = `
  <h1>${displayResult}</h1>
  <h2>The computer chose</h2>
  <img class="pic" src="${gameChoices[computerChoice]}"/>
  `
}
